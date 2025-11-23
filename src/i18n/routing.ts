import { defineRouting } from "next-intl/routing";

export const LOCALES = ["en", "tr"] as const;
export type LocaleTypes = (typeof LOCALES)[number];
export type LocaleField = Record<LocaleTypes, string>;

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: "en",
  localePrefix: "never",
});
