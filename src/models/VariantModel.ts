import { LocaleField } from "@/i18n/routing";
import { PropertyModel, PropertyModelType } from "./PropertyModel";
import { LocaleModel } from "./LocaleModel";

export interface VariantModelType {
  key: string;
  productCode: string;
  title: LocaleField;
  properties: PropertyModelType[];
}

export class VariantModel {
  key: string;
  productCode: string;
  title: LocaleModel;
  properties: PropertyModel[];

  constructor(data: VariantModelType) {
    this.key = data.key;
    this.productCode = data.productCode;
    this.title = new LocaleModel(data.title);
    this.properties = (data.properties ?? []).map((p) => new PropertyModel(p));
  }

  static empty(): VariantModel {
    const data: VariantModelType = {
      key: "new",
      productCode: "",
      title: { en: "", tr: "" },
      properties: [PropertyModel.emptyCountProperty()],
    };

    return new VariantModel(data);
  }
}
