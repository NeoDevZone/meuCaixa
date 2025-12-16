import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Entrada } from "./pages/Entrada";
import { Saida } from "./pages/Saida";
import { Fiado } from "./pages/Fiado";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/entrada" element={<Entrada />} />
        <Route path="/saida" element={<Saida />} />
        <Route path="/fiado" element={<Fiado />} />
      </Routes>
    </div>
  );
}
