import { Category } from "./categoryData";

export interface ProductModel {
  key: string;
  category: Category;
  pdf: string;
  bulletPointCount: number;
  variants: ProductVariantModel[];
}

export interface ProductVariantModel {
  key: string;
  productCode: string;
  properties: ProductVariantPropertiesModel;
}

export interface ProductVariantPropertiesModel {
  color: {
    data: string;
    unit: "color";
  };
  [key: string]: {
    data: string | number | { width: number; height: number; depth?: number };
    unit: string;
  };
}
