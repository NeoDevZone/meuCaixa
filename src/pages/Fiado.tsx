import { Base } from "../components/base";
import { FormFiado } from "../components/formFiado";
import { TabelaFiado } from "../components/tabelaFiado";
import { useCliente } from "../hooks/useCliente";
import { ErrorState } from "../components/errorState";

export function Fiado() {
  const { clienteId } = useCliente();

  if (!clienteId) {
    return (
      <Base>
        <ErrorState
          title="Cliente não encontrado"
          message="Verifique a URL ou contate o suporte."
        />
      </Base>
    );
  }

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
