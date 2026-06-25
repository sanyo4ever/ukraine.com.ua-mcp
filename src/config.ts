export function requireAdmToken(): string {
  const token = process.env.ADMTOOLS_API_TOKEN || process.env.UKRAINE_COM_UA_API_TOKEN;
  if (!token) {
    process.stderr.write("Missing ADMTOOLS_API_TOKEN (or UKRAINE_COM_UA_API_TOKEN fallback)\n");
    process.exit(1);
  }
  return token;
}
