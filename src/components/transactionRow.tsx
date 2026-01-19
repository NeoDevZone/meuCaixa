import { XCircleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { DeleteRowModal } from "./deleteRowModal";

type TransactionType = "Entrada" | "Saída" | "Fiado";

type RowProps = {
  movimento: TransactionType;
  valor: string;
  descricao: string;
  data: string;
  metodo: string;
  categoria: string;
};

const valueColorMap: Record<TransactionType, string> = {
  Entrada: "text-green-500",
  Saída: "text-red-500",
  Fiado: "text-gray-400",
};

export function TransactionRow({
  movimento,
  valor,
  descricao,
  data,
  metodo,
}: RowProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full min-w-125 md:min-w-0 text-md sm:text-xl font-semibold grid grid-cols-5 md:grid-cols-12 p-3 sm:p-4 text-border-detail border-t border-border-detail m-auto">
      <span className="text-center md:text-left md:col-span-3">
        {descricao}
      </span>
      <span className="text-center md:col-span-3">{data}</span>
      <span className="text-center md:col-span-3">{metodo}</span>
      <div className="flex justify-between items-center gap-2.5 col-span-2 md:col-span-3">
        <span
          className={`text-center font-semibold ${valueColorMap[movimento]}`}
        >
          {valor}
        </span>
        <button
          onClick={() => setIsModalOpen(true)}
          type="button"
          className="cursor-pointer text-red-500"
        >
          <XCircleIcon size={24} />
        </button>
        <DeleteRowModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <p>Tem certeza que deseja excluir esta transação?</p>
        </DeleteRowModal>
      </div>
    </div>
  );
}
