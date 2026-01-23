import { Outlet } from "react-router-dom";
import { useCliente } from "../hooks/useCliente";
import { ErrorState } from "./errorState";

export function ClientShell() {
  const { clienteId } = useCliente();

  if (!clienteId) {
    return (
      <ErrorState
        title="Cliente não encontrado"
        message="Verifique a URL ou contate o suporte."
      />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Outlet />
    </div>
  );
}
