import {
  CreditCardIcon,
  HandCoinsIcon,
  InvoiceIcon,
  MoneyIcon,
  X,
  BookOpen,
} from "@phosphor-icons/react"; // Adicione X para fechar
import { Link } from "react-router-dom";
import logo from "../assets/MeuCaixaComFundo.png";
import { useCliente } from "../hooks/useCliente";

type NavBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function LeftNavBar({ isOpen, onClose }: NavBarProps) {
  const { clienteId } = useCliente();
  const base = clienteId ? `/c/${clienteId}` : "/c";

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-full max-w-60 bg-secondary text-border-detail min-h-screen flex flex-col transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
      >
        <div className="w-full flex justify-center p-4">
          <img src={logo} className="max-w-20 sm:max-w-24 rounded-2xl" />
        </div>
        <div className="p-4 md:p-10">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white cursor-pointer"
          >
            <X size={24} />
          </button>
          <div className="grid grid-cols-1 sm:grid-flow-col sm:grid-rows-5 gap-5 sm:gap-10 mt-10 md:mt-0">
            <Link
              className="row-span-1 flex items-center gap-5 hover:text-text-dark hover:font-bold hover:text-2xl transition-all duration-300"
              to={`${base}`}
              onClick={onClose}
            >
              <InvoiceIcon size={36} />
              <span>Extrato</span>
            </Link>
            <Link
              className="row-span-1 flex items-center gap-5 hover:text-text-dark hover:text-2xl hover:font-bold transition-all duration-300"
              to={`${base}/entrada`}
              onClick={onClose}
            >
              <MoneyIcon size={36} />
              <span>Entrada</span>
            </Link>
            <Link
              className="row-span-1 flex items-center gap-5 hover:text-text-dark hover:text-2xl hover:font-bold transition-all duration-300"
              to={`${base}/saida`}
              onClick={onClose}
            >
              <HandCoinsIcon size={36} />
              <span>Saida</span>
            </Link>
            <Link
              className="row-span-1 flex items-center gap-5 hover:text-text-dark hover:text-2xl hover:font-bold transition-all duration-300"
              to={`${base}/fiado`}
              onClick={onClose}
            >
              <CreditCardIcon size={36} />
              <span>Fiado</span>
            </Link>
            <Link
              className="row-span-1 flex items-center gap-5 hover:text-text-dark hover:text-2xl hover:font-bold transition-all duration-300"
              to={`${base}/documentacao`}
              onClick={onClose}
            >
              <BookOpen size={36} />
              <span>Ajuda</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
