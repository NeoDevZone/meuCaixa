import {
  CreditCardIcon,
  HandCoinsIcon,
  InvoiceIcon,
  MoneyIcon,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import logo from "../assets/MeuCaixaComFundo.png";

export function LeftNavBar() {
  return (
    <div className="text-xl font-sans pl-5 pr-5 p-10 bg-secondary text-border-detail min-h-screen w-60 flex flex-col justify-between">
      <div className="grid grid-flow-col grid-rows-4 gap-10 ">
        <Link
          className="row-span-1 flex items-center gap-5 hover:text-text-dark hover:font-bold hover:text-2xl transition-all duration-300"
          to="/"
        >
          <InvoiceIcon size={36} />
          <span>Extrato</span>
        </Link>
        <Link
          className="row-span-1 flex items-center gap-5 hover:text-text-dark hover:text-2xl hover:font-bold transition-all duration-300"
          to="/entrada"
        >
          <MoneyIcon size={36} />
          <span>Entrada</span>
        </Link>
        <Link
          className="row-span-1 flex items-center gap-5 hover:text-text-dark hover:text-2xl hover:font-bold transition-all duration-300"
          to="/saida"
        >
          <HandCoinsIcon size={36} />
          <span>Saida</span>
        </Link>
        <Link
          className="row-span-1 flex items-center gap-5 hover:text-text-dark hover:text-2xl hover:font-bold transition-all duration-300"
          to="/fiado"
        >
          <CreditCardIcon size={36} />
          <span>Fiado</span>
        </Link>
      </div>
      <div className="w-full flex justify-center">
        <img src={logo} className="max-w-24 rounded-2xl" />
      </div>
    </div>
  );
}
