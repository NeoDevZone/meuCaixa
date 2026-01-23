import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { FiadoRow } from "./fiadoRow";
import { useCliente } from "../hooks/useCliente";
import { withCliente } from "../services/api";

type Comprador = {
  _id: string;
  nome: string;
  divida: number;
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

export function TabelaFiado() {
  const { clienteId } = useCliente();
  const [compradores, setCompradores] = useState<Comprador[]>([]);

  const fetchCompradores = useCallback(async () => {
    try {
      if (!clienteId) return;

      const response = await axios.get<Comprador[]>(
        `${import.meta.env.VITE_API_BASE_URL}${withCliente(clienteId, "/compradores")}`,
      );
      setCompradores(response.data);
    } catch (error) {
      console.error("Erro ao buscar compradores:", error);
    }
  }, [clienteId]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCompradores();
  }, [fetchCompradores]);

  return (
    <div>
      <div className="bg-text-dark rounded-2xl gap-2.5 w-full max-w-sm sm:min-w-150 mb-10 drop-shadow-black/30 shadow-[-4px_6px_14px_rgba(0,0,0,0.4)]">
        <div className="overflow-x-auto md:overflow-x-visible">
          <div className="text-lg sm:text-xl font-semibold w-full min-w-125 md:min-w-0 grid grid-cols-6 md:grid-cols-12 text-border-detail p-3 sm:p-4 border-t border-border-detail m-auto">
            <span className="text-left col-span-2 md:col-span-5">
              Comprador
            </span>
            <span className="text-center col-span-2 md:col-span-5">Valor</span>
          </div>
          {compradores.map((comprador) => (
            <FiadoRow
              key={comprador._id}
              comprador={comprador.nome}
              valor={formatCurrency(comprador.divida)}
              compradorId={comprador._id}
              divida={comprador.divida}
              onRefresh={fetchCompradores}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
