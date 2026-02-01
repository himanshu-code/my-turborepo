import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return <div style={{ maxWidth: 1000, margin: "0 auto" }}>{children}</div>;
}
