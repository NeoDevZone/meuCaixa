import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAuthCheck() {
  const navigate = useNavigate();

  useEffect(() => {
    // Verificar se há clienteId armazenado ao carregar a app
    const clienteId = localStorage.getItem("clienteId");

    // Se está em uma rota protegida e não tem clienteId, redireciona para login
    if (!clienteId && window.location.pathname.startsWith("/c/")) {
      navigate("/login");
    }
  }, [navigate]);
}
