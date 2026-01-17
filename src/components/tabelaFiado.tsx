import { FiadoRow } from "./fiadoRow";

export function TabelaFiado() {
  return (
    <div>
      <div className="bg-text-dark rounded-2xl gap-2.5 w-250 mb-10 drop-shadow-black/30 shadow-[-4px_6px_14px_rgba(0,0,0,0.4)]">
        <div className="text-xl font-semibold w-[98%] grid grid-cols-12 text-border-detail p-4 border-t border-border-detail m-auto">
          <span className="text-left col-span-3">Comprador</span>
          <span className="text-left col-span-3">Descrição</span>
          <span className="text-left col-span-2">Data</span>
          <span className="text-left col-span-4">Valor</span>
        </div>
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          valor="R$ 999.999,99"
        />
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          valor="R$ 9,99"
        />
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          valor="R$ 9,99"
        />
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          valor="R$ 9,99"
        />
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          valor="R$ 9,99"
        />
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          valor="R$ 9,99"
        />
      </div>
    </div>
  );
}
