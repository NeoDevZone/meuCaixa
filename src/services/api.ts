import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true, // Habilita envio de cookies
});

// Interceptador para erros 401 (não autenticado/token expirado)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token inválido ou expirado
      localStorage.removeItem("clienteId");
      window.location.href = "/login";
    } else if (error.response?.status === 403) {
      // Acesso negado
      console.error("Acesso negado:", error.response.data);
    }
    return Promise.reject(error);
  },
);

export function withCliente(clienteId: string, path: string) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/c/${clienteId}${normalized}`;
}
