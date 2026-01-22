import { useEffect, useRef, useState } from "react";
import { Base } from "../components/base";
import { Card } from "../components/card";
import { TransactionRow } from "../components/transactionRow";
import axios from "axios";

interface TransactionRowProps {
  _id: string;
  descricao: string;
  data: string;
  valor: number;
  tipo: "Entrada" | "Saida";
}

export function Home() {
  const getCurrentMonth = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    return `${year}-${month}`;
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const getMonthFromURL = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("month");
  };

  const [date, setDate] = useState(getMonthFromURL() ?? getCurrentMonth());
  const [isSummaryModalOpen, setIsSummaryModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<TransactionRowProps[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get<TransactionRowProps[]>(
          `${import.meta.env.VITE_API_BASE_URL}/api/extrato/data?data=${date}`,
        );
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [date]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.get("data")) {
      params.set("data", date);
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}?${params.toString()}`,
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
      `${window.location.pathname}?${params.toString()}`,
    );
  };

  return (
    <Base>
      <div className="flex justify-center pt-10 sm:pt-13 flex-col items-center px-4">
        <h1 className="text-text-dark sm:mb-25 text-2xl sm:text-4xl pb-20 sm:pb-40 font-bold">
          Extrato
        </h1>
        <div>
          <div className="bg-text-dark rounded-2xl gap-2.5 pt-20 sm:pt-30 w-full max-w-100 sm:min-w-200 relative mb-10 drop-shadow-black/30 shadow-[-4px_6px_14px_rgba(0,0,0,0.4)]">
            <div className="overflow-x-auto md:overflow-x-visible">
              <div className="text-lg sm:text-xl font-semibold w-full min-w-125 md: grid grid-cols-5 md:grid-cols-12 text-border-detail p-3 sm:p-4 border-t border-border-detail m-auto">
                <span className="text-center md:text-left col-span-1 md:col-span-3">
                  Descrição
                </span>
                <span className="text-center col-span-1 md:col-span-3">
                  Data
                </span>
                <span className="text-center col-span-1 md:col-span-3">
                  Método
                </span>
                <span className="text-left col-span-2 md:col-span-3">
                  Valor
                </span>
              </div>
              {transactions.map((transaction: TransactionRowProps) => (
                <TransactionRow
                  key={transaction._id}
                  id={transaction._id}
                  descricao={transaction.descricao}
                  data={transaction.data}
                  metodo="Boleto"
                  movimento={transaction.tipo}
                  valor={formatCurrency(transaction.valor)}
                />
              ))}
            </div>
            <div className="flex justify-center items-center gap-4 sm:gap-9 absolute -top-11.5 sm:-top-60 left-0 right-0 flex-col">
              <div className="flex justify-center sm:justify-end pr-0 sm:pr-5">
                <input
                  ref={inputRef}
                  type="month"
                  value={date}
                  onChange={(e) => handleChange(e.target.value)}
                  onClick={() => inputRef.current?.showPicker()}
                  className="h-11 w-60 px-4 rounded-2xl border-2 bg-border-detail border-text-dark text-text-dark font-semibold hover:cursor-pointer"
                />
              </div>
              {/* Em telas pequenas, mostre botão; em maiores, os cards */}
              <div className="md:hidden flex justify-center">
                <button
                  onClick={() => setIsSummaryModalOpen(true)}
                  className="bg-secondary text-white px-6 py-3 rounded-2xl font-bold hover:bg-primary transition-colors"
                >
                  Ver Resumo
                </button>
              </div>
              <div className="hidden w-200 md:flex gap-4 sm:gap-9 flex-col md:flex-row justify-center">
                <Card title="Entrada" value="R$ 5.947,99" color="text-input" />
                <Card title="Saida" value="R$ 5.947,99" color="text-output" />
                <Card title="Lucro" value="R$ 5.947,99" color="text-input" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isSummaryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setIsSummaryModalOpen(false)}
          ></div>
          <div className="relative w-auto max-w-sm mx-auto my-6 z-50">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none p-6">
              <div className="flex items-start justify-between border-b border-solid border-slate-200 pb-3 mb-4 rounded-t">
                <h3 className="text-xl font-semibold text-text-dark">Resumo</h3>
                <button
                  className="cursor-pointer p-1 ml-auto bg-transparent border-0 text-red-500 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setIsSummaryModalOpen(false)}
                >
                  ×
                </button>
              </div>
              <div className="relative w-50 flex-auto flex flex-col gap-4">
                <Card title="Entrada" value="R$ 5.947,99" color="text-input" />
                <Card title="Saida" value="R$ 5.947,99" color="text-output" />
                <Card title="Lucro" value="R$ 5.947,99" color="text-input" />
              </div>
            </div>
          </div>
        </div>
      )}
    </Base>
  );
}
