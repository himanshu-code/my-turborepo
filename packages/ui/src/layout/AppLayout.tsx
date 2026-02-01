import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8 bg-[var(--color-bg)]">
          {children}
        </main>
      </div>
    </div>
  );
}
