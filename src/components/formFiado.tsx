import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useCliente } from "../hooks/useCliente";
import { withCliente } from "../services/api";
import {
  formPrimeiroFiadoSchema,
  type FormPrimeiroFiadoSchema,
} from "../schemas/formFiadoSchema";

export function FormFiado() {
  const { clienteId } = useCliente();
  const [valorFormatado, setValorFormatado] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function formatCurrency(value: string) {
    const onlyNumbers = value.replace(/\D/g, "");

    const number = Number(onlyNumbers) / 100;

    return number.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function currencyToNumber(value: string) {
    return Number(value.replace(/[R$\s.]/g, "").replace(",", "."));
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
      onSubmit={handleSubmit(async (data) => {
        setIsSubmitting(true);
        try {
          const valorNumerico = currencyToNumber(data.valor);

          if (!clienteId) {
            alert("Cliente não encontrado na URL.");
            setIsSubmitting(false);
            return;
          }

          await axios.post(
            `${import.meta.env.VITE_API_BASE_URL}${withCliente(clienteId, "/fiados/create")}`,
            {
              descricao: data.descricao,
              valor: valorNumerico,
              nomeComprador: data.comprador,
            },
          );

          alert("Fiado cadastrado com sucesso!");
          setValorFormatado("");
          setValue("comprador", "");
          setValue("descricao", "");
          setValue("valor", "");
        } catch (error) {
          console.error("Erro ao criar fiado:", error);
          alert("Erro ao cadastrar fiado!");
        } finally {
          setIsSubmitting(false);
        }
      })}
      className="w-full max-w-sm sm:max-w-md md:max-w-135 h-full bg-text-dark rounded-2xl p-4 sm:p-5 gap-5 sm:gap-7.5 flex flex-col"
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

      <div className="w-full flex justify-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full max-w-50 sm:max-w-67.5 h-12 sm:h-14 text-text-dark text-base sm:text-lg font-bold bg-secondary rounded-2xl hover:cursor-pointer hover:rounded-sm hover:border-2 hover:border-border-detail transition-all duration-200"
        >
          {isSubmitting ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </form>
  );
}
