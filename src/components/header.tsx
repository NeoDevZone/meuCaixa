import logo from "../assets/MeuCaixa.png";

export function Header() {
  return (
    <div className="flex h-24 bg-primary justify-end pr-5">
      <img src={logo} className="w-20 h-20" />
    </div>
  );
}
