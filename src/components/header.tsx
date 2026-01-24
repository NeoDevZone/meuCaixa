import { List } from "@phosphor-icons/react"; // Ícone hambúrguer
import logo from "../assets/MeuCaixa.png";

type HeaderProps = {
  onToggleNav: () => void;
};

export function Header({ onToggleNav }: HeaderProps) {
  return (
    <div className="fixed w-full flex h-20 sm:h-24 bg-primary justify-between items-center px-4 sm:px-6 z-10 shadow-lg shadow-black/20">
      <button onClick={onToggleNav} className="text-white cursor-pointer">
        <List size={32} />
      </button>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="hidden sm:block text-white leading-tight text-right">
          <p className="text-xs uppercase tracking-[0.2em] text-border-detail">
            Meu Caixa
          </p>
          <p className="text-sm font-semibold">Controle total em tempo real</p>
        </div>
        <img src={logo} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl" />
      </div>
    </div>
  );
}
