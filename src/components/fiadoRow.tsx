import { useForm } from "react-hook-form";
import {
  formFiadoSchema,
  type FormFiadoSchema,
} from "../schemas/formFiadoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiadoOrPagamentoModal } from "./fiadoOrPagamendoModal";
import { useEffect, useRef, useState } from "react";
import { List } from "phosphor-react";
import { HistoricoModal } from "./historicoModal";

type RowProps = {
  valor: string;
  comprador: string;
  compradorId: string;
  divida: number;
  onRefresh: () => void;
};

export function FiadoRow({
  valor,
  comprador,
  compradorId,
  divida,
  onRefresh,
}: RowProps) {
  const { handleSubmit } = useForm<FormFiadoSchema>({
    resolver: zodResolver(formFiadoSchema),
  });

  const [isModalPaymentOpen, setIsModalPaymentOpen] = useState(false);
  const [isModalFiadoOpen, setIsModalFiadoOpen] = useState(false);
  const [isModalHistoricoOpen, setIsModalHistoricoOpen] = useState(false);

  const [openButtons, setOpenButtons] = useState(false);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (buttonsRef.current && !buttonsRef.current.contains(target)) {
        setOpenButtons(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="w-full min-w-125 md:min-w-0 text-md sm:text-xl font-semibold grid grid-cols-6 md:grid-cols-12 p-3 sm:p-4 text-border-detail border-t border-border-detail m-auto"
    >
      <span className="text-left col-span-2 md:col-span-5 h-max flex mt-auto mb-auto">
        {comprador}
      </span>
      <div className="flex justify-center items-center col-span-2 md:col-span-5">
        <span className={`text-center font-semibold text-fiado`}>{valor}</span>
      </div>
      <div
        ref={buttonsRef}
        className="relative flex justify-end items-center col-span-2 md:col-span-2"
      >
        <button
          type="button"
          onClick={() => setOpenButtons(!openButtons)}
          className="text-background-light flex justify-between color-fiado border-2 border-secondary rounded-xl h-full p-2 hover:cursor-pointer"
        >
          <List
            className={"mt-auto mb-auto transition-all duration-150"}
            size={20}
          />
        </button>
        {openButtons && (
          <div
            className={`absolute mt-2 right-0 flex flex-col rounded-2xl items-center gap-2.5 w-40 sm:w-40 p-2 bg-text-dark border-background-light border-2 shadow-lg z-10`}
          >
            <button
              onClick={() => setIsModalFiadoOpen(true)}
              type="button"
              className="h-7.5 cursor-pointer text-white w-32 bg-output rounded-lg text-lg text-center hover:rounded-sm hover:border transition-all duration-150 "
            >
              Novo Fiado
            </button>
            <button
              onClick={() => setIsModalPaymentOpen(true)}
              type="button"
              className="h-7.5 cursor-pointer text-white w-32 bg-input rounded-lg text-lg text-center hover:rounded-sm hover:border transition-all duration-150 "
            >
              Pagar Fiado
            </button>
            <button
              onClick={() => setIsModalHistoricoOpen(true)}
              type="button"
              className="h-7.5 cursor-pointer text-white w-32 bg-primary rounded-lg text-lg text-center hover:rounded-sm hover:border transition-all duration-150"
            >
              Histórico
            </button>
          </div>
        )}
      </div>
      <FiadoOrPagamentoModal
        isOpen={isModalPaymentOpen}
        onClose={() => setIsModalPaymentOpen(false)}
        type="pagamento"
        compradorId={compradorId}
        maxDivida={divida}
        onSuccess={onRefresh}
      />
      <FiadoOrPagamentoModal
        isOpen={isModalFiadoOpen}
        onClose={() => setIsModalFiadoOpen(false)}
        type="fiado"
        compradorId={compradorId}
        onSuccess={onRefresh}
      />
      <HistoricoModal
        isOpen={isModalHistoricoOpen}
        onClose={() => setIsModalHistoricoOpen(false)}
        compradorId={compradorId}
        compradorNome={comprador}
      />
    </form>
  );
}
