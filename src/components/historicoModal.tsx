// src/components/fiadoOrPagamendoModal.tsx
import { XCircleIcon } from "@phosphor-icons/react";
import { HistoricoRow } from "./historicoRow";
// import { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HistoricoModal({ isOpen, onClose }: ModalProps) {
  //   const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none px-4">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-2xl mx-auto my-4 sm:my-6 z-50">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none p-4 sm:p-6">
          <div className="flex items-start justify-between border-b border-solid border-slate-200 pb-2 sm:pb-3 mb-3 sm:mb-4 rounded-t">
            <h3 className="text-2xl font-semibold text-primary">Histórico</h3>
            <button
              className="cursor-pointer p-1 ml-auto bg-transparent border-0 text-output float-right text-xl sm:text-2xl leading-none font-semibold outline-none focus:outline-none hover:text-red-500 transition-colors"
              onClick={onClose}
            >
              <XCircleIcon size={20} />
            </button>
          </div>

          <div className="relative flex-auto text-primary">
            <div className="overflow-x-auto md:overflow-x-visible">
              <HistoricoRow
                comprador="Comprador 1"
                descricao="Descrição 1"
                data="01/01/2024"
                valor="R$100,00"
              />
              <HistoricoRow
                comprador="Comprador 1"
                descricao="Descrição 1"
                data="01/01/2024"
                valor="R$100,00"
              />
              <HistoricoRow
                comprador="Comprador 1"
                descricao="Descrição 1"
                data="01/01/2024"
                valor="R$10000,00"
              />
              <HistoricoRow
                comprador="Comprador 1"
                descricao="Descrição 1"
                data="01/01/2024"
                valor="R$100,00"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
