// src/components/fiadoOrPagamendoModal.tsx
import { XCircleIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { HistoricoRow } from "./historicoRow";
import { useCliente } from "../hooks/useCliente";
import { withCliente } from "../services/api";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  compradorId: string;
  compradorNome: string;
}

type HistoricoItem = {
  _id: string;
  descricao: string;
  valor: number;
  tipo: "fiado" | "pagamento";
  idComprador: string;
  data: string;
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
}

function formatDate(value: string) {
  const date = new Date(value);
  return date.toLocaleDateString("pt-BR");
}

export function HistoricoModal({
  isOpen,
  onClose,
  compradorId,
  compradorNome,
}: ModalProps) {
  const { clienteId } = useCliente();
  const [loading, setLoading] = useState(false);
  const [historico, setHistorico] = useState<HistoricoItem[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const fetchHistorico = async () => {
      if (!clienteId) return;

      setLoading(true);
      try {
        const response = await axios.get<HistoricoItem[]>(
          `${import.meta.env.VITE_API_BASE_URL}${withCliente(
            clienteId,
            `/fiados/comprador/${compradorId}`,
          )}`,
        );
        setHistorico(response.data);
      } catch (error) {
        console.error("Erro ao buscar histórico:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistorico();
  }, [isOpen, compradorId, clienteId]);

  const handleDelete = async (id: string) => {
    const confirmed = window.confirm(
      "Tem certeza que deseja excluir esta transação?",
    );
    if (!confirmed) return;

    if (!clienteId) {
      alert("Cliente não encontrado na URL.");
      return;
    }

    setDeletingId(id);
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}${withCliente(
          clienteId,
          `/fiados/delete/${id}`,
        )}`,
      );
      setHistorico((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Erro ao deletar transação:", error);
      alert("Erro ao deletar transação!");
    } finally {
      setDeletingId(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none px-4">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl mx-auto my-4 sm:my-6 z-50">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none p-4 sm:p-6">
          <div className="flex items-start justify-between border-b border-solid border-slate-200 pb-2 sm:pb-3 mb-3 sm:mb-4 rounded-t">
            <h3 className="text-2xl font-semibold text-primary">Histórico</h3>
            <button
              className="cursor-pointer p-1 ml-auto bg-transparent border-0 text-output float-right text-xl sm:text-2xl leading-none font-semibold outline-none focus:outline-none hover:text-red-500 transition-colors"
              onClick={onClose}
            >
              <XCircleIcon size={20} />
            </button>
          </div>

          <div className="relative flex-auto text-primary">
            <div className="overflow-x-auto md:overflow-x-visible overflow-y-auto max-h-96">
              {loading && (
                <p className="p-4 text-center text-sm text-gray-600">
                  Carregando histórico...
                </p>
              )}
              {!loading && historico.length === 0 && (
                <p className="p-4 text-center text-sm text-gray-600">
                  Nenhuma movimentação encontrada.
                </p>
              )}
              {!loading &&
                historico.map((item) => (
                  <HistoricoRow
                    key={item._id}
                    id={item._id}
                    comprador={compradorNome}
                    descricao={item.descricao}
                    data={formatDate(item.data)}
                    valor={formatCurrency(item.valor)}
                    onDelete={handleDelete}
                    deletingId={deletingId}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
