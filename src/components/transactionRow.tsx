type TransactionType = "Entrada" | "Saída" | "Fiado";

type RowProps = {
  type: TransactionType;
  value: string;
};

const valueColorMap: Record<TransactionType, string> = {
  Entrada: "text-green-500",
  Saída: "text-red-500",
  Fiado: "text-gray-400",
};

export function TransactionRow({ type, value }: RowProps) {
  return (
    <div className="w-[98%] text-xl font-semibold grid grid-cols-6 p-4 text-border-detail border-t border-border-detail m-auto">
      <span className="text-center">Nome</span>
      <span className="text-center">Data</span>
      <span className="text-center">Pix</span>
      <span className="text-center">Venda</span>

      <span className="capitalize text-center">{type}</span>

      <span className={`text-center font-semibold ${valueColorMap[type]}`}>
        {value}
      </span>
    </div>
  );
}
