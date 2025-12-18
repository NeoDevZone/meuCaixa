import { CaretUpIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  formSaidaSchema,
  type FormSaidaSchema,
} from "../schemas/formSaidaSchema";
import { DropdownItens } from "./dropdownItens";

export function FormSaida() {
  const [openMetodo, setOpenMetodo] = useState(false);
  const [valueMetodo, setValueMetodo] = useState("Selecione");

  const [valorFormatado, setValorFormatado] = useState("");
  const [openCategoria, setOpenCategoria] = useState(false);
  const [valueCategoria, setValueCategoria] = useState("Selecione");
  const metodoRef = useRef<HTMLDivElement>(null);
  const categoriaRef = useRef<HTMLDivElement>(null);

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
  } = useForm<FormSaidaSchema>({
    resolver: zodResolver(formSaidaSchema),
    defaultValues: {
      metodo: "",
      categoria: "",
    },
  });

  function handleSelectMetodo(option: string) {
    setValueMetodo(option);
    setValue("metodo", option, { shouldValidate: true });
    setOpenMetodo(false);
  }

  function handleSelectCategoria(option: string) {
    setValueCategoria(option);
    setValue("categoria", option, { shouldValidate: true });
    setOpenCategoria(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (metodoRef.current && !metodoRef.current.contains(target)) {
        setOpenMetodo(false);
      }

      if (categoriaRef.current && !categoriaRef.current.contains(target)) {
        setOpenCategoria(false);
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
        console.log("Dados validados:", data);
      })}
      className="w-135 h-full bg-text-dark rounded-2xl p-5 gap-7.5 flex flex-col"
    >
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
      <div className="flex flex-col gap-1" ref={metodoRef}>
        <span className="text-secondary">Método</span>
        <button
          type="button"
          onClick={() => setOpenMetodo(!openMetodo)}
          className="text-fiado flex justify-between bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2 hover:cursor-pointer"
        >
          <span className="mt-auto mb-auto">{valueMetodo}</span>

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
          <div className="max-h-40 overflow-auto absolute mt-20 w-125 bg-background-light border border-border-detail rounded-lg shadow-lg z-10">
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
      <div className="flex flex-col gap-1" ref={categoriaRef}>
        <span className="text-secondary">Categoria</span>
        <button
          type="button"
          onClick={() => setOpenCategoria(!openCategoria)}
          className="text-fiado flex justify-between bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2 hover:cursor-pointer"
        >
          <span className="mt-auto mb-auto">{valueCategoria}</span>
          <CaretUpIcon
            className={`mt-auto mb-auto transition-all duration-150 ${
              openCategoria ? "rotate-0" : "rotate-180"
            }`}
            size={32}
          />
        </button>
        {errors.categoria && (
          <span className="text-red-500 text-sm">
            {errors.categoria.message}
          </span>
        )}
        {openCategoria && (
          <div className="max-h-40 overflow-auto absolute mt-20 w-125 bg-background-light border border-border-detail rounded-lg shadow-lg z-10">
            <DropdownItens
              onClick={() =>
                handleSelectCategoria("Compra de mercadoria / estoque")
              }
            >
              Compra de mercadoria / estoque
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectCategoria("Fornecedores")}
            >
              Fornecedores
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectCategoria("Aluguel")}>
              Aluguel
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectCategoria("Água")}>
              Água
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectCategoria("Energia")}>
              Energia
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectCategoria("Internet / Telefone")}
            >
              Internet / Telefone
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectCategoria("Transporte / combustível")}
            >
              Transporte / combustível
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectCategoria("Alimentação")}>
              Alimentação
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectCategoria("Marketing / Publicidade")}
            >
              Marketing / Publicidade
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectCategoria("Impostos / Taxas")}
            >
              Impostos / Taxas
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectCategoria("Salários / pró-labore")}
            >
              Salários / pró-labore
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectCategoria("Manutenção")}>
              Manutenção
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectCategoria("Equipamentos")}
            >
              Equipamentos
            </DropdownItens>
            <DropdownItens
              onClick={() => handleSelectCategoria("Software / Assinaturas")}
            >
              Software / Assinaturas
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectCategoria("Juros Pagos")}>
              Juros Pagos
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectCategoria("Multas")}>
              Multas
            </DropdownItens>
            <DropdownItens onClick={() => handleSelectCategoria("Outros")}>
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
