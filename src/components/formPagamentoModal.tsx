// src/components/formPagamentoModal.tsx
import { CaretUpIcon } from "@phosphor-icons/react";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { DropdownItens } from "./dropdownItens";
import { type FormPagamentoSchema } from "../schemas/formFiadoSchema";

export const FormPagamentoModal = forwardRef<
  { submit: () => void },
  { onSubmit: (data: { metodo: string; valor: string }) => void }
>(({ onSubmit }, ref) => {
  const [openMetodo, setOpenMetodo] = useState(false);
  const [valueMetodo, setValueMetodo] = useState("Selecione");
  const [valorFormatado, setValorFormatado] = useState("");
  const metodoRef = useRef<HTMLDivElement>(null);
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
  } = useForm<FormPagamentoSchema>();

  useImperativeHandle(
    ref,
    () => ({
      submit: () => {
        // Dispara o handleSubmit do React Hook Form manualmente
        handleSubmit(onSubmit)();
      },
    }),
    [handleSubmit, onSubmit],
  );

  function handleSelectMetodo(option: string) {
    setValueMetodo(option);
    setValue("metodo", option, { shouldValidate: true });
    setOpenMetodo(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (metodoRef.current && !metodoRef.current.contains(target)) {
        setOpenMetodo(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit, (errors) =>
        console.log("Erros de validação:", errors),
      )}
      className="w-100 h-full rounded-2xl p-5 gap-7.5 flex flex-col shadow-lg shadow-black/25 drop-shadow-white/40 drop-shadow-md"
    >
      <div className="flex flex-col gap-1" ref={metodoRef}>
        <span className="text-secondary">Método</span>
        <button
          type="button"
          onClick={() => setOpenMetodo(!openMetodo)}
          className="text-fiado flex justify-between bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2 hover:cursor-pointer"
        >
          {valueMetodo === "Selecione" ? (
            <span className="mt-auto mb-auto">{valueMetodo}</span>
          ) : (
            <span className="mt-auto mb-auto text-black">{valueMetodo}</span>
          )}
          <CaretUpIcon
            className={`mt-auto mb-auto transition-all duration-150 ${
              openMetodo ? "rotate-0" : "rotate-180"
            }`}
            size={32}
          />
        </button>
        {errors.metodo && (
          <span className="text-red-500 text-sm">{errors.metodo.message}</span>
        )}
        {openMetodo && (
          <div className="max-h-40 overflow-auto absolute mt-20 w-90 bg-background-light border border-border-detail rounded-lg shadow-lg z-10">
            <DropdownItens onClick={() => handleSelectMetodo("Dinheiro")}>
              Dinheiro
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectMetodo("Pix")}>
              Pix
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectMetodo("Cartão de crédito")}
            >
              Cartão de crédito
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectMetodo("Cartão de débito")}
            >
              Cartão de débito
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectMetodo("Transferência bancária")}
            >
              Transferência bancária
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectMetodo("Boleto bancário")}
            >
              Boleto bancário
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectMetodo("Cheque")}>
              Cheque
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectMetodo("Carteira Digital")}
            >
              Carteira Digital
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectMetodo("Débito automático")}
            >
              Débito automático
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectMetodo("Crédito Parcelado")}
            >
              Crédito Parcelado
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectMetodo("Outros")}>
              Outros
            </DropdownItens>
          </div>
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
