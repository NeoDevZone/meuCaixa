import { Base } from "../components/base";
import { FormSaida } from "../components/formSaida";

export function Saida() {
  return (
    <Base>
      <div className="flex justify-center pt-10 sm:pt-13 flex-col items-center px-4">
        <h1 className="text-text-dark text-2xl sm:text-4xl pb-10 sm:pb-20 font-bold">Saida</h1>
        <FormSaida />
      </div>
    </Base>
  );
}
