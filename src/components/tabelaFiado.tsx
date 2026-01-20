import { FiadoRow } from "./fiadoRow";

export function TabelaFiado() {
  return (
    <div>
      <div className="bg-text-dark rounded-2xl gap-2.5 w-full max-w-sm sm:min-w-150 mb-10 drop-shadow-black/30 shadow-[-4px_6px_14px_rgba(0,0,0,0.4)]">
        <div className="overflow-x-auto md:overflow-x-visible">
          <div className="text-lg sm:text-xl font-semibold w-full min-w-125 md:min-w-0 grid grid-cols-6 md:grid-cols-12 text-border-detail p-3 sm:p-4 border-t border-border-detail m-auto">
            <span className="text-left col-span-2 md:col-span-5">
              Comprador
            </span>
            <span className="text-center col-span-2 md:col-span-5">Valor</span>
          </div>
          <FiadoRow comprador="Antonio Gabriel" valor="R$ 999.999,99" />
          <FiadoRow comprador="Comprador" valor="R$ 9,99" />
          <FiadoRow comprador="Comprador" valor="R$ 9,99" />
          <FiadoRow comprador="Comprador" valor="R$ 9,99" />
          <FiadoRow comprador="Comprador" valor="R$ 9,99" />
          <FiadoRow comprador="Comprador" valor="R$ 9,99" />
          
        </div>
      </div>
    </div>
  );
}
