import { LocaleField, LOCALES, LocaleTypes } from "@/i18n/routing";

export class LocaleModel implements Record<LocaleTypes, string> {
  en!: string;
  tr!: string;

  constructor(initial: LocaleField) {
    LOCALES.forEach((locale) => {
      this[locale] = initial[locale] ?? "";
    });
  }

  static empty(): LocaleModel {
    const emptyData = LOCALES.reduce((acc, locale) => {
      acc[locale] = "";
      return acc;
    }, {} as LocaleField);

    return new LocaleModel(emptyData);
  }

  get(locale: LocaleTypes): string {
    return this[locale];
  }

  set(locale: LocaleTypes, value: string) {
    this[locale] = value;
  }

  displayText(locale: LocaleTypes): string {
    return this[locale];
  }
}
