import { Category } from "./categoryData";
import type { LocaleTypes } from "@/i18n/routing";

export interface ProductModel {
  id: string;
  key: string;
  title: LocaleField;
  description: LocaleField;
  bulletPoints: LocaleField[];
  category: Category;
  pdf: string;
  variants: ProductVariantModel[];
}

export interface ProductVariantModel {
  key: string;
  productCode: string;
  properties: ProductVariantPropertiesModel;
}

export interface ProductVariantPropertiesModel {
  color: {
    data: ColorOption[];
    unit: "color";
  };
  [key: string]: {
    data:
      | string
      | number
      | { width: number; height: number; depth?: number }
      | ColorOption[];
    unit: string;
  };
}

export type LocaleField = Record<LocaleTypes, string>;

export const ColorOptions = ["white"] as const;
export type ColorOption = (typeof ColorOptions)[number];

export const createEmptyProduct = (): ProductModel => ({
  id: "",
  key: "new",
  title: { en: "", tr: "" },
  description: { en: "", tr: "" },
  bulletPoints: [],
  category: Category.NAPKIN,
  pdf: "",
  variants: [],
});

export const createEmptyLocaleField = (): LocaleField => ({
  en: "",
  tr: "",
});
