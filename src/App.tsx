import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Entrada } from "./pages/Entrada";
import { Saida } from "./pages/Saida";
import { Fiado } from "./pages/Fiado";
import { Documentacao } from "./pages/Documentacao";
import { DocumentacaoPublica } from "./pages/DocumentacaoPublica";
import { ClientShell } from "./components/clientShell";
import { ErrorState } from "./components/errorState";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useAuthCheck } from "./hooks/useAuthCheck";

export function App() {
  // Verificar autenticação ao inicializar
  useAuthCheck();

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/documentacao" element={<DocumentacaoPublica />} />
        <Route
          path="/c/:clienteId"
          element={
            <ProtectedRoute>
              <ClientShell />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="entrada" element={<Entrada />} />
          <Route path="saida" element={<Saida />} />
          <Route path="fiado" element={<Fiado />} />
          <Route path="documentacao" element={<Documentacao />} />
        </Route>
        <Route
          path="*"
          element={
            <ErrorState
              title="Rota não encontrada"
              message="Verifique a URL digitada."
            />
          }
        />
      </Routes>
    </div>
  );
}
