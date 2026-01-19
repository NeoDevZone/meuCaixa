import { Base } from "../components/base";
import { FormEntrada } from "../components/formEntrada";

export function Entrada() {
  return (
    <Base>
      <div className="flex justify-center pt-10 sm:pt-13 flex-col items-center px-4">
        <h1 className="text-text-dark text-2xl sm:text-4xl pb-10 sm:pb-20 font-bold">Entrada</h1>
        <FormEntrada />
      </div>
    </Base>
  );
}
