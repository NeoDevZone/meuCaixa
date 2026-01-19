import { XCircleIcon } from "@phosphor-icons/react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function DeleteRowModal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative w-auto max-w-sm sm:max-w-md md:max-w-lg mx-auto my-6 z-50">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none p-6">
          <div className="flex items-start justify-between border-b border-solid border-slate-200 pb-3 mb-4 rounded-t">
            <h3 className="text-xl font-semibold text-red-500">
              Excluir Transação
            </h3>
            <button
              className="cursor-pointer p-1 ml-auto bg-transparent border-0 text-output float-right text-2xl leading-none font-semibold outline-none focus:outline-none hover:text-red-500 transition-colors"
              onClick={onClose}
            >
              <XCircleIcon size={24} />
            </button>
          </div>
          <div className="relative flex-auto text-text-dark">{children}</div>
          <div className="flex items-center justify-center pt-4 mt-4 border-t border-solid border-slate-200 rounded-b">
            <button
              className="cursor-pointer bg-secondary text-white hover:bg-primary active:bg-input font-bold uppercase text-sm px-6 py-3 rounded-2xl hover:rounded-sm hover:border-2 h-12 border-text-dark shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={() => {
                alert("Transação deletada!");
                onClose();
              }}
            >
              Salvar alterações
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
