import { Base } from "../components/base";
import { FormSaida } from "../components/formSaida";

export function Saida() {
  return (
    <Base>
      <div className="flex justify-center pt-13 flex-col items-center">
        <h1 className="text-text-dark text-4xl pb-20 font-bold">Saida</h1>
        <FormSaida />
      </div>
    </Base>
  );
}
