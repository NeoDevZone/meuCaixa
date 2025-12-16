import { CaretDownIcon } from "@phosphor-icons/react";
import { useState } from "react";

export function FormEntradaESaida() {
  const [openMetodo, setOpenMetodo] = useState(false);
  const [valueMetodo, setValueMetodo] = useState("Selecione");

  const [openCategoria, setOpenCategoria] = useState(false);
  const [valueCategoria, setValueCategoria] = useState("Selecione");

  function handleSelectMetodo(option: string) {
    setValueMetodo(option);
    setOpenMetodo(false);
  }

  function handleSelectCategoria(option: string) {
    setValueCategoria(option);
    setOpenCategoria(false);
  }

  return (
    <div className="w-135 h-full bg-text-dark rounded-2xl p-5 gap-7.5 flex flex-col">
      <div className="flex flex-col gap-1">
        <span className="text-secondary">Descrição</span>
        <input
          className="bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2"
          placeholder="Digite aqui..."
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-secondary">Método</span>
        <button
          onClick={() => setOpenMetodo(!openMetodo)}
          className="text-fiado flex justify-between bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2 hover:cursor-pointer"
        >
          <span className="mt-auto mb-auto">Pix</span>
          <CaretDownIcon className="mt-auto mb-auto" size={32} />
        </button>
        {openMetodo && (
          <div className="absolute mt-20 w-125 bg-background-light border border-border-detail rounded-lg shadow-lg z-10">
            <button
              onClick={() => handleSelectMetodo("Entrada")}
              className="w-full px-4 py-2 text-left hover:bg-border-detail/20"
            >
              Entrada
            </button>

            <button
              onClick={() => handleSelectMetodo("Saída")}
              className="w-full px-4 py-2 text-left hover:bg-border-detail/20"
            >
              Saída
            </button>

            <button
              onClick={() => handleSelectMetodo("Fiado")}
              className="w-full px-4 py-2 text-left hover:bg-border-detail/20"
            >
              Fiado
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-secondary">Categoria</span>
        <button
          onClick={() => setOpenCategoria(!openCategoria)}
          className="text-fiado flex justify-between bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2 hover:cursor-pointer"
        >
          <span className="mt-auto mb-auto">Venda</span>
          <CaretDownIcon className="mt-auto mb-auto" size={32} />
        </button>
        {openCategoria && (
          <div className="absolute mt-20 w-125 bg-background-light border border-border-detail rounded-lg shadow-lg z-10">
            <button
              onClick={() => handleSelectCategoria("Entrada")}
              className="w-full px-4 py-2 text-left hover:bg-border-detail/20"
            >
              Entrada
            </button>

            <button
              onClick={() => handleSelectCategoria("Saída")}
              className="w-full px-4 py-2 text-left hover:bg-border-detail/20"
            >
              Saída
            </button>

            <button
              onClick={() => handleSelectCategoria("Fiado")}
              className="w-full px-4 py-2 text-left hover:bg-border-detail/20"
            >
              Fiado
            </button>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-secondary">Valor</span>
        <input
          className="bg-border-detail color-fiado border-2 border-secondary rounded-2xl h-12.5 p-2"
          placeholder="R$ 0,00"
        />
      </div>
      <div className="w-100% flex justify-center">
        <button className="w-67.5 h-14 text-text-dark text-lg font-bold bg-secondary rounded-2xl hover:cursor-pointer hover:rounded-sm hover:border-2 hover:border-border-detail transition-all duration-200">
          Salvar
        </button>
      </div>
    </div>
  );
}
