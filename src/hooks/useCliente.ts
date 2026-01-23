import { useParams } from "react-router-dom";

export function useCliente() {
  const { clienteId } = useParams<{ clienteId: string }>();
  return { clienteId };
}
