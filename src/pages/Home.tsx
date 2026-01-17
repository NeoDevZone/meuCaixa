import { useEffect, useRef, useState } from "react";
import { Base } from "../components/base";
import { Card } from "../components/card";
import { TransactionRow } from "../components/transactionRow";

export function Home() {
  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
  };

  const getMonthFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("month");
  };
  const [date, setDate] = useState(getMonthFromURL() ?? getCurrentMonth());
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.get("data")) {
      params.set("data", date);
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}?${params.toString()}`
      );
    }
  }, [date]);

  const handleChange = (value: string) => {
    setDate(value);

    const params = new URLSearchParams(window.location.search);
    params.set("data", value);

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  return (
    <Base>
      <div className="flex justify-center pt-13 flex-col items-center">
        <h1 className="text-text-dark text-4xl pb-40 font-bold">Extrato</h1>
        <div>
          <div className="bg-text-dark rounded-2xl gap-2.5 pt-30 w-200 relative mb-10 drop-shadow-black/30 shadow-[-4px_6px_14px_rgba(0,0,0,0.4)]">
            <div className="text-xl font-semibold w-[98%] grid grid-cols-4 text-border-detail p-4 border-t border-border-detail m-auto ">
              <span className="text-center">Descrição</span>
              <span className="text-center">Data</span>
              <span className="text-center">Método</span>
              <span className="text-center">Valor</span>
            </div>
            <TransactionRow
              descricao="Nome"
              categoria="Venda"
              data="Data"
              metodo="Pix"
              movimento="Saída"
              valor="R$ 9,99"
            />
            <TransactionRow
              descricao="Nome"
              categoria="Venda"
              data="Data"
              metodo="Pix"
              movimento="Fiado"
              valor="R$ 9,99"
            />
            <TransactionRow
              descricao="Nome"
              categoria="Venda"
              data="Data"
              metodo="Pix"
              movimento="Entrada"
              valor="R$ 9,99"
            />
            <TransactionRow
              descricao="Nome"
              categoria="Venda"
              data="Data"
              metodo="Pix"
              movimento="Saída"
              valor="R$ 9,99"
            />
            <TransactionRow
              descricao="Nome"
              categoria="Venda"
              data="Data"
              metodo="Pix"
              movimento="Fiado"
              valor="R$ 9,99"
            />
            <TransactionRow
              descricao="Nome"
              categoria="Venda"
              data="Data"
              metodo="Pix"
              movimento="Entrada"
              valor="R$ 9,99"
            />

            <div className="flex gap-9 absolute -top-40 left-3 right-0 flex-col">
              <div className="flex justify-end pr-5">
                <input
                  ref={inputRef}
                  type="month"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  onClick={() => inputRef.current?.showPicker()}
                  className="h-11 px-4 rounded-2xl border-2 bg-border-detail border-text-dark text-text-dark font-semibold hover:cursor-pointer"
                />
              </div>

              <div className="flex gap-9">
                <Card title="Entrada" value="R$ 5.947,99" color="text-input" />
                <Card title="Lucro" value="R$ 5.947,99" color="text-input" />
                <Card title="Saida" value="R$ 5.947,99" color="text-output" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
