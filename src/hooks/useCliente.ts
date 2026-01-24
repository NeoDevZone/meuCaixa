import { useParams } from "react-router-dom";

export function useCliente() {
  const { clienteId: clienteIdFromParams } = useParams<{ clienteId: string }>();

  // Prioriza clienteId da URL, mas fallback para localStorage se necessário
  const clienteId =
    clienteIdFromParams || localStorage.getItem("clienteId") || undefined;

  return { clienteId };
}
