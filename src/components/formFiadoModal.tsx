// src/components/formFiadoModal.tsx
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { type FormFiadoSchema } from "../schemas/formFiadoSchema";

export const FormFiadoModal = forwardRef<
  { submit: () => void },
  { onSubmit: (data: { descricao: string; valor: string }) => void }
>(({ onSubmit }, ref) => {
  const [valorFormatado, setValorFormatado] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

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
  } = useForm<FormFiadoSchema>();

  useImperativeHandle(ref, () => ({
  submit: () => {
    // Dispara o handleSubmit do React Hook Form manualmente
    handleSubmit(onSubmit)(); 
  },
}), [handleSubmit, onSubmit]);


  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full rounded-2xl p-4 sm:p-5 gap-5 sm:gap-7.5 flex flex-col shadow-lg shadow-black/25 drop-shadow-white/40 drop-shadow-md"
    >
      <div className="flex flex-col gap-1">
        <span className="text-secondary">Descrição</span>
        <input
          {...register("descricao")}
          className="bg-border-detail color-fiado border-2 text-black border-secondary rounded-2xl h-12.5 p-2"
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
          className="text-black bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2"
          placeholder="R$ 0,00"
        />
        {errors.valor && (
          <span className="text-red-500 text-sm">{errors.valor.message}</span>
        )}
      </div>
      <div className="w-100% flex justify-center"></div>
    </form>
  );
});
