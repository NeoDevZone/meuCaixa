import { XCircleIcon } from "@phosphor-icons/react";

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
  categoria,
}: RowProps) {
  return (
    <div className="w-[98%] text-xl font-semibold grid grid-cols-6 p-4 text-border-detail border-t border-border-detail m-auto">
      <span className="text-center">{descricao}</span>
      <span className="text-center">{data}</span>
      <span className="text-center">{metodo}</span>
      <span className="text-center">{categoria}</span>

      <span className="capitalize text-center">{movimento}</span>

      <div className="flex justify-center items-center gap-2.5">
        <span
          className={`text-center font-semibold ${valueColorMap[movimento]}`}
        >
          {valor}
        </span>
        <button type="button" className="cursor-pointer text-red-500">
          <XCircleIcon size={24} />
        </button>
      </div>
    </div>
  );
}
