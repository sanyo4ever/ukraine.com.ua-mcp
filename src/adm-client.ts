const DEFAULT_BASE_URL = "https://adm.tools/action";
const DEFAULT_TIMEOUT_MS = 30_000;

export type AdmParamValue = string | number | boolean;
export type AdmParams = Record<string, AdmParamValue>;
export type AdmMethod = "GET" | "POST";

export interface AdmEnvelope<T> {
  result: boolean;
  response: T;
  messages?: unknown;
  error?: string;
}

export class AdmClient {
  private readonly baseUrl: string;
  private readonly token: string;
  private readonly timeoutMs: number;

  constructor(options: { token: string; baseUrl?: string; timeoutMs?: number }) {
    this.token = options.token;
    this.baseUrl = (options.baseUrl ?? DEFAULT_BASE_URL).replace(/\/+$/, "");
    this.timeoutMs = options.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  }

  async call<T = unknown>(
    action: string,
    params: AdmParams = {},
    options: { method?: AdmMethod } = {},
  ): Promise<AdmEnvelope<T>> {
    const sanitizedAction = sanitizeAction(action);
    const method = options.method ?? "POST";
    const body = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      body.set(key, String(value));
    }

    const encodedParams = body.toString();
    const query = method === "GET" && encodedParams ? `?${encodedParams}` : "";
    const url = `${this.baseUrl}/${sanitizedAction}/${query}`;

    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${this.token}`,
        ...(method === "POST" ? { "Content-Type": "application/x-www-form-urlencoded" } : {}),
      },
      body: method === "POST" ? body : undefined,
      signal: AbortSignal.timeout(this.timeoutMs),
    });

    const text = await response.text();
    let json: AdmEnvelope<T>;
    try {
      json = JSON.parse(text) as AdmEnvelope<T>;
    } catch {
      throw new Error(`adm.tools ${sanitizedAction} returned non-JSON response: ${text.slice(0, 240)}`);
    }

    if (!response.ok || json.result === false) {
      const message = json.error ?? formatMessages(json.messages) ?? text.slice(0, 240);
      throw new Error(`adm.tools ${sanitizedAction} failed: ${message}`);
    }

    return json;
  }
}

function sanitizeAction(action: string): string {
  const sanitized = action.trim().replace(/^\/+/, "").replace(/\/+$/, "");
  if (!sanitized || sanitized.includes("..")) {
    throw new Error(`Invalid adm.tools action path: ${action}`);
  }
  return sanitized;
}

function formatMessages(messages: unknown): string | undefined {
  if (!messages) return undefined;
  if (typeof messages === "string") return messages;
  try {
    return JSON.stringify(messages);
  } catch {
    return String(messages);
  }
}
