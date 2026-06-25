export function textResult(text: string) {
  return {
    content: [{ type: "text" as const, text }],
  };
}

export function jsonResult(title: string, value: unknown) {
  return textResult(`# ${title}\n\n\`\`\`json\n${JSON.stringify(value, null, 2)}\n\`\`\``);
}

export function errorResult(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  return textResult(`Error: ${message}`);
}
