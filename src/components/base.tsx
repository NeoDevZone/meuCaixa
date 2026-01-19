import { useState } from "react";
import { Header } from "./header";
import { LeftNavBar } from "./navbar";

export function Base({ children }: { children: React.ReactNode }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <LeftNavBar isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <div className="flex-1 flex flex-col">
        {" "}
        <Header onToggleNav={() => setIsNavOpen(!isNavOpen)} />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
