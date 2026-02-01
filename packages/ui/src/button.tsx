"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button
      style={{ padding: "8px 16px", background: "black", color: "white" }}
    >
      {children}
    </button>
  );
}
