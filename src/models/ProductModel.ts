import { Category } from "@/data/categoryData";
import { VariantModel, VariantModelType } from "./VariantModel";
import { LocaleModel } from "./LocaleModel";
import { LocaleField, LocaleTypes } from "@/i18n/routing";
import { FirebaseImages } from "@/lib/firebaseImage";

export interface ProductModelType {
  id: string;
  key: string;
  title: LocaleField;
  description: LocaleField;
  bulletPoints: LocaleField[];
  category: Category;
  pdf: string;
  variants: VariantModelType[];
  isActive: boolean;
}

export class ProductModel {
  id: string;
  key: string;
  title: LocaleModel;
  description: LocaleModel;
  bulletPoints: LocaleModel[];
  category: Category;
  pdf: string;
  variants: VariantModel[];
  isActive: boolean;

  constructor(data: ProductModelType) {
    this.id = data.id;
    this.key = data.key;
    this.title = new LocaleModel(data.title);
    this.description = new LocaleModel(data.description);
    this.bulletPoints = (data.bulletPoints ?? []).map(
      (bp) => new LocaleModel(bp)
    );
    this.category = data.category ?? Category.NAPKIN;
    this.pdf = data.pdf ?? "";
    this.variants = (data.variants ?? []).map(
      (variant) => new VariantModel(variant)
    );
    this.isActive = data.isActive ?? false;
  }

  static empty(): ProductModel {
    const data: ProductModelType = {
      id: "",
      key: "new",
      title: { en: "", tr: "" },
      description: { en: "", tr: "" },
      bulletPoints: [{ en: "", tr: "" }],
      category: Category.NAPKIN,
      pdf: "",
      variants: [VariantModel.empty()],
      isActive: false,
    };

    return new ProductModel(data);
  }

  addVariant(variant: VariantModel) {
    this.variants.push(variant);
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  displayTitle(locale: string = "en"): string {
    return this.title.displayText(locale as LocaleTypes);
  }

  displayDescription(locale: string = "en"): string {
    return this.description.displayText(locale as LocaleTypes);
  }

  displayBulletPoints(locale: string = "en"): string[] {
    return this.bulletPoints.map((bp) => bp.displayText(locale as LocaleTypes));
  }

  getCover(): string {
    return FirebaseImages.getCover(this.key);
  }
}
