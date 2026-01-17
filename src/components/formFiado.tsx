import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formPrimeiroFiadoSchema,
  type FormPrimeiroFiadoSchema,
} from "../schemas/formFiadoSchema";

export function FormFiado() {
  const [valorFormatado, setValorFormatado] = useState("");

  function formatCurrency(value: string) {
    const onlyNumbers = value.replace(/\D/g, "");

    const number = Number(onlyNumbers) / 100;

    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormPrimeiroFiadoSchema>({
    resolver: zodResolver(formPrimeiroFiadoSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log("Dados validados:", data);
      })}
      className="w-135 h-full bg-text-dark rounded-2xl p-5 gap-7.5 flex flex-col"
    >
      <div className="flex flex-col gap-1">
        <span className="text-secondary">Comprador</span>
        <input
          {...register("comprador")}
          className="bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2"
          placeholder="Digite aqui..."
        />
        {errors.comprador && (
          <span className="text-red-500 text-sm">
            {errors.comprador.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-secondary">Descrição</span>
        <input
          {...register("descricao")}
          className="bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2"
          placeholder="Digite aqui..."
        />
        {errors.descricao && (
          <span className="text-red-500 text-sm">
            {errors.descricao.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-secondary">Valor</span>
        <input
          {...register("valor")}
          value={valorFormatado}
          onChange={(e) => {
            const formatted = formatCurrency(e.target.value);
            setValorFormatado(formatted);

            setValue("valor", formatted, { shouldValidate: true });
          }}
          className="bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2"
          placeholder="R$ 0,00"
        />
        {errors.valor && (
          <span className="text-red-500 text-sm">{errors.valor.message}</span>
        )}
      </div>

      <div className="w-100% flex justify-center">
        <button
          type="submit"
          className="w-67.5 h-14 text-text-dark text-lg font-bold bg-secondary rounded-2xl hover:cursor-pointer hover:rounded-sm hover:border-2 hover:border-border-detail transition-all duration-200"
        >
          Salvar
        </button>
      </div>
    </form>
  );
}
