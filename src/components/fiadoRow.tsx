import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  formFiadoSchema,
  type FormFiadoSchema,
} from "../schemas/formFiadoSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { CaretUpIcon, XCircleIcon } from "@phosphor-icons/react";
import { DropdownItens } from "./dropdownItens";

type TransactionType = "Sim" | "Não";

type RowProps = {
  pago: TransactionType;
  valor: string;
  descricao: string;
  comprador: string;
  metodo: string;
  categoria: string;
  data: string;
};

const valueColorMap: Record<TransactionType, string> = {
  Sim: "text-green-500",
  Não: "text-gray-400",
};

export function FiadoRow({
  pago,
  valor,
  descricao,
  comprador,
  metodo,
  categoria,
  data,
}: RowProps) {
  const [valuePago, setValuePago] = useState<TransactionType>(`${pago}`);
  const [openPago, setOpenPago] = useState(false);
  const pagoRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, setValue } = useForm<FormFiadoSchema>({
    resolver: zodResolver(formFiadoSchema),
    defaultValues: {
      metodo: "",
      categoria: "",
    },
  });

  function handleSelectPago(option: TransactionType) {
    setValuePago(option);
    setValue("pago", option, { shouldValidate: true });
    setOpenPago(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (pagoRef.current && !pagoRef.current.contains(target)) {
        setOpenPago(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      className="w-[98%] text-xl font-semibold grid grid-cols-7 p-4 text-border-detail border-t border-border-detail m-auto"
    >
      <span className="text-center">{descricao}</span>
      <span className="text-center">{comprador}</span>
      <span className="text-center">{data}</span>
      <span className="text-center">{categoria}</span>

      <div ref={pagoRef} className="relative flex justify-center">
        <button
          {...register("pago")}
          type="button"
          onClick={() => setOpenPago(!openPago)}
          className="w-30 cursor-pointer text-border-detail flex justify-between "
        >
          <span className="m-auto">{valuePago}</span>
          <CaretUpIcon
            className={`transition-all duration-150 ${
              openPago ? "rotate-0" : "rotate-180"
            }`}
            size={32}
          />
        </button>
        {openPago && (
          <div className="absolute top-full mt-2 w-30 bg-background-light border border-border-detail rounded-lg shadow-lg z-10">
            <DropdownItens onClick={() => handleSelectPago("Sim")}>
              Sim
            </DropdownItens>
          </div>
        )}
      </div>

      <span className="text-center">{metodo}</span>
      <div className="flex justify-center items-center gap-2.5">
        <span
          className={`text-center font-semibold ${valueColorMap[valuePago]}`}
        >
          {valor}
        </span>
        <button type="button" className="cursor-pointer text-red-500">
          <XCircleIcon size={24} />
        </button>
      </div>
    </form>
  );
}
