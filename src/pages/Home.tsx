import { Base } from "../components/base";
import { Card } from "../components/card";
import { TransactionRow } from "../components/transactionRow";

export function Home() {
  return (
    <Base>
      <div className="flex justify-center pt-13 flex-col items-center">
        <h1 className="text-text-dark text-4xl pb-40 font-bold">Extrato</h1>
        <div>
          <div className="bg-text-dark rounded-2xl gap-2.5 pt-30 w-250 relative mb-10 drop-shadow-black/30 shadow-[-4px_6px_14px_rgba(0,0,0,0.4)]">
            <div className="text-xl font-semibold w-[98%] grid grid-cols-6 text-border-detail p-4 border-t border-border-detail m-auto">
              <span className="text-center">Descrição</span>
              <span className="text-center">Data</span>
              <span className="text-center">Método</span>
              <span className="text-center">Categoria</span>
              <span className="text-center">Movimento</span>
              <span className="text-center">Valor</span>
            </div>
            <TransactionRow type="Saída" value="R$ 9,99" />
            <TransactionRow type="Fiado" value="R$ 9,99" />
            <TransactionRow type="Entrada" value="R$ 9,99" />
            <TransactionRow type="Saída" value="R$ 9,99" />
            <TransactionRow type="Fiado" value="R$ 9,99" />
            <TransactionRow type="Entrada" value="R$ 9,99" />

            <div className="flex gap-9 absolute -top-25 left-3 right-0 ">
              <Card title="Entrada" value="R$ 5.947,99" color="text-input" />
              <Card title="Lucro" value="R$ 5.947,99" color="text-input" />
              <Card title="Saida" value="R$ 5.947,99" color="text-output" />
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
