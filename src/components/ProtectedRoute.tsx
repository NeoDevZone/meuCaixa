import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const clienteId = localStorage.getItem("clienteId");

  if (!clienteId) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
