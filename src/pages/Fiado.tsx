import { Base } from "../components/base";
import { FormFiado } from "../components/formFiado";
import { TabelaFiado } from "../components/tabelaFiado";

export function Fiado() {
  return (
    <Base>
      <div className="flex justify-center pt-13 gap-5 flex-col items-center">
        <h1 className="text-text-dark text-4xl pb-5 font-bold">Fiado</h1>
        <FormFiado />
        <TabelaFiado />
      </div>
    </Base>
  );
}
