import { FiadoRow } from "./fiadoRow";

export function TabelaFiado() {
  return (
    <div>
      <div className="bg-text-dark rounded-2xl gap-2.5 w-250 mb-10 drop-shadow-black/30 shadow-[-4px_6px_14px_rgba(0,0,0,0.4)]">
        <div className="text-xl font-semibold w-[98%] grid grid-cols-7 text-border-detail p-4 border-t border-border-detail m-auto">
          <span className="text-center">Descrição</span>
          <span className="text-center">Comprador</span>
          <span className="text-center">Data</span>
          <span className="text-center">Categoria</span>
          <span className="text-center">Pago</span>
          <span className="text-center">Método</span>
          <span className="text-center">Valor</span>
        </div>
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          metodo="Método"
          categoria="Categoria"
          pago="Não"
          valor="R$ 9,99"
        />
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          metodo="Método"
          categoria="Categoria"
          pago="Sim"
          valor="R$ 9,99"
        />
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          metodo="Método"
          categoria="Categoria"
          pago="Sim"
          valor="R$ 9,99"
        />
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          metodo="Método"
          categoria="Categoria"
          pago="Não"
          valor="R$ 9,99"
        />
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          metodo="Método"
          categoria="Categoria"
          pago="Sim"
          valor="R$ 9,99"
        />
        <FiadoRow
          descricao="Descrição"
          comprador="Comprador"
          data="Data"
          metodo="Método"
          categoria="Categoria"
          pago="Não"
          valor="R$ 9,99"
        />
      </div>
    </div>
  );
}
