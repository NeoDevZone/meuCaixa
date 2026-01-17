import { useForm } from "react-hook-form";
import {
  formFiadoSchema,
  type FormFiadoSchema,
} from "../schemas/formFiadoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FiadoOrPagamentoModal } from "./fiadoOrPagamendoModal";
import { useState } from "react";

type RowProps = {
  valor: string;
  descricao: string;
  comprador: string;
  data: string;
};

export function FiadoRow({ valor, descricao, comprador, data }: RowProps) {
  const { handleSubmit } = useForm<FormFiadoSchema>({
    resolver: zodResolver(formFiadoSchema),
  });

  const [isModalPaymentOpen, setIsModalPaymentOpen] = useState(false);
  const [isModalFiadoOpen, setIsModalFiadoOpen] = useState(false);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="w-[98%] text-xl font-semibold grid grid-cols-12 p-4 text-border-detail border-t border-border-detail m-auto"
    >
      <span className="text-left col-span-3 h-max flex mt-auto mb-auto">
        {comprador}
      </span>
      <span className="text-left col-span-3 h-max flex mt-auto mb-auto">
        {descricao}
      </span>
      <span className="text-left col-span-2 h-max flex mt-auto mb-auto">
        {data}
      </span>
      <div className="flex justify-center items-center col-span-4">
        <span className={`text-center font-semibold text-fiado`}>{valor}</span>
        <div className="ml-auto flex flex-col gap-2.5 min-h-max">
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
          <FiadoOrPagamentoModal
            isOpen={isModalPaymentOpen}
            onClose={() => setIsModalPaymentOpen(false)}
            type="pagamento"
          />
          <FiadoOrPagamentoModal
            isOpen={isModalFiadoOpen}
            onClose={() => setIsModalFiadoOpen(false)}
            type="fiado"
          />
        </div>
      </div>
    </form>
  );
}
