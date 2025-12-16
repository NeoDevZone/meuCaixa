import type { ReactNode } from "react";
import { Header } from "./header";
import { LeftNavBar } from "./navbar";

type BaseProps = {
  children: ReactNode;
};

export function Base({ children }: BaseProps) {
  return (
    <div className="flex bg-background-light">
      <LeftNavBar />
      <div className="flex-1 flex flex-col">
        <Header />
        {children}
      </div>
    </div>
  );
}
