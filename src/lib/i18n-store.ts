import { useSyncExternalStore } from "react";

export type Locale = "es" | "en";

const STORAGE_KEY = "portfolio-locale";
const listeners = new Set<() => void>();

function readInitialLocale(): Locale {
  if (typeof window === "undefined") return "es";
  return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "es";
}

let locale: Locale = readInitialLocale();

export function getLocale(): Locale {
  return locale;
}

export function setLocale(next: Locale) {
  if (next === locale) return;
  locale = next;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, next);
  }
  listeners.forEach((listener) => listener());
}

export function toggleLocale() {
  setLocale(locale === "es" ? "en" : "es");
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, getLocale, () => "es");
}
