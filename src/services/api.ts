import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export function withCliente(clienteId: string, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/c/${clienteId}${normalized}`;
}
