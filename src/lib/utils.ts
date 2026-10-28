import type { CSSProperties } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Variables CSS inline, ex. `cssVars({ "--d": ".06s" })` pour décaler une apparition. */
export const cssVars = (vars: Record<`--${string}`, string | number>) =>
  vars as CSSProperties;
