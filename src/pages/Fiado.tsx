import { Base } from "../components/base";
import { FormFiado } from "../components/formFiado";
import { TabelaFiado } from "../components/tabelaFiado";

export function Fiado() {
  return (
    <Base>
      <div className="flex justify-center pt-10 sm:pt-13 gap-5 flex-col items-center px-4">
        <h1 className="text-text-dark text-2xl sm:text-4xl pb-5 font-bold">
          Fiado
        </h1>
        <FormFiado />
        <TabelaFiado />
      </div>
    </Base>
  );
}
