import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const currentTime = new Date().toLocaleTimeString("es-NI", { hour: "2-digit", minute: "2-digit" });
export const currentDate = new Date().toLocaleDateString("es-NI", { weekday: "long", year: "numeric", month: "long", day: "numeric" });