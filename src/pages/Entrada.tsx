import { Base } from "../components/base";
import { FormEntrada } from "../components/formEntrada";

export function Entrada() {
  return (
    <Base>
      <div className="flex justify-center pt-13 flex-col items-center">
        <h1 className="text-text-dark text-4xl pb-20 font-bold">Entrada</h1>
        <FormEntrada />
      </div>
    </Base>
  );
}
