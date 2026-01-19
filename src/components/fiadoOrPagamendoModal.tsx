// src/components/fiadoOrPagamendoModal.tsx
import { XCircleIcon } from "@phosphor-icons/react";
import { FormPagamentoModal } from "./formPagamentoModal";
import { FormFiadoModal } from "./formFiadoModal";
import { useRef, useState } from "react";
import type {
  FormFiadoSchema,
  FormPagamentoSchema,
} from "../schemas/formFiadoSchema";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: string;
}

export function FiadoOrPagamentoModal({ isOpen, onClose, type }: ModalProps) {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<{ submit: () => void } | null>(null);

  function handlePagamentoSubmit(dados: FormPagamentoSchema) {
    try {
      setLoading(true);
      console.log("Enviando Pagamento para API:", dados);

      // Exemplo de Requisição:
      // await api.post('/pagamentos', dados);

      alert("Pagamento salvo com sucesso!");
      onClose();
    } catch (error) {
      console.log(error);
      alert("Erro ao salvar pagamento");
    } finally {
      setLoading(false);
    }
  }

  function handleFiadoSubmit(dados: FormFiadoSchema) {
    try {
      setLoading(true);
      console.log("Enviando Fiado para API:", dados);

      // await api.post('/fiados', dados);

      alert("Fiado registrado!");
      onClose();
    } catch (error) {
      console.log(error);
      alert("Erro ao salvar fiado");
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none px-4">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto my-4 sm:my-6 z-50">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none p-4 sm:p-6">
          <div className="flex items-start justify-between border-b border-solid border-slate-200 pb-2 sm:pb-3 mb-3 sm:mb-4 rounded-t">
            {type === "pagamento" ? (
              <h3 className="text-lg sm:text-xl font-semibold text-input">
                Novo Pagamento
              </h3>
            ) : (
              <h3 className="text-lg sm:text-xl font-semibold text-output">
                Novo Fiado
              </h3>
            )}
            <button
              className="cursor-pointer p-1 ml-auto bg-transparent border-0 text-output float-right text-xl sm:text-2xl leading-none font-semibold outline-none focus:outline-none hover:text-red-500 transition-colors"
              onClick={onClose}
            >
              <XCircleIcon size={20} />
            </button>
          </div>

          <div className="relative flex-auto">
            {type === "pagamento" ? (
              <FormPagamentoModal
                ref={formRef}
                onSubmit={handlePagamentoSubmit}
              />
            ) : (
              <FormFiadoModal ref={formRef} onSubmit={handleFiadoSubmit} />
            )}
          </div>

          <div className="flex items-center justify-center pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-solid border-slate-200 rounded-b">
            <button
              className="rounded-2xl hover:rounded-sm hover:border-2 h-10 sm:h-12 border-text-dark cursor-pointer bg-secondary text-white hover:bg-primary active:bg-input font-bold uppercase text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => {
                formRef.current?.submit();
              }}
            >
              {loading ? "Salvando..." : "Salvar alterações"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
