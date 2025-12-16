import { Base } from "../components/base";
import { FormEntradaESaida } from "../components/form";

export function Entrada() {
  return (
    <Base>
      <div className="flex justify-center pt-13 flex-col items-center">
        <h1 className="text-text-dark text-4xl pb-40 font-bold">Entrada</h1>
        <FormEntradaESaida />
      </div>
    </Base>
  );
}
