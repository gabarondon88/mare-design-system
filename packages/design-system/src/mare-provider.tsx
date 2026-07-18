import type { PropsWithChildren } from "react";

import "./styles.css";

export type MareProviderProps = PropsWithChildren<{
  className?: string;
}>;

export function MareProvider({ children, className }: MareProviderProps) {
  const classNames = ["mare-theme", className].filter(Boolean).join(" ");

  return <div className={classNames}>{children}</div>;
}

