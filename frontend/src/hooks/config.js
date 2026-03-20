export const getApiBaseUrl = () => {
  const envApiUrl = import.meta.env.VITE_API_URL;
  if (envApiUrl) return envApiUrl.replace(/\/$/, "");

  const { protocol, hostname } = window.location;

  if (hostname.endsWith(".app.github.dev")) {
    const host3001 = hostname.replace(/-\d+\.app\.github\.dev$/, "-3001.app.github.dev");
    return `${protocol}//${host3001}`;
  }

  return "http://localhost:3001";
};