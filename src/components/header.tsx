import { List } from "@phosphor-icons/react"; // Ícone hambúrguer
import logo from "../assets/MeuCaixa.png";

type HeaderProps = {
  onToggleNav: () => void;
};

export function Header({ onToggleNav }: HeaderProps) {
  return (
    <div className="flex h-20 sm:h-24 bg-primary justify-between items-center px-4">
      <button onClick={onToggleNav} className="text-white cursor-pointer">
        <List size={32} />
      </button>
      <img src={logo} className="w-16 h-16 sm:w-20 sm:h-20" />
    </div>
  );
}
