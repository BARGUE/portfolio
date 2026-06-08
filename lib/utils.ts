import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToProjects(id: string) {
 const element = document.querySelector(id);
 if (element) {
  element.scrollIntoView({ behavior: "smooth" });
 }
};
