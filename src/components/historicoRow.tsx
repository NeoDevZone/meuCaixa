import { XCircleIcon } from "@phosphor-icons/react";

interface RowProps {
  id: string;
  comprador: string;
  descricao: string;
  data: string;
  valor: string;
  onDelete: (id: string) => void;
  deletingId: string | null;
}

export function HistoricoRow({
  id,
  comprador,
  descricao,
  data,
  valor,
  onDelete,
  deletingId,
}: RowProps) {
  return (
    <div className="w-full min-w-125 md:min-w-0 text-md sm:text-xl font-semibold grid grid-cols-7 md:grid-cols-12 p-3 sm:p-4 m-auto">
      <span className="text-left md:text-left col-span-2 md:col-span-3">
        {comprador}
      </span>
      <span className="text-center col-span-2 md:col-span-3">{data}</span>
      <span className="text-center col-span-2 md:col-span-3">{descricao}</span>
      <div className="flex justify-between items-center gap-2.5 col-span-1 md:col-span-3">
        <span className={`text-center font-semibold`}>{valor}</span>
        <button
          onClick={() => onDelete(id)}
          type="button"
          disabled={deletingId === id}
          className="cursor-pointer text-red-500 hover:text-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <XCircleIcon size={24} />
        </button>
      </div>
    </div>
  );
}
