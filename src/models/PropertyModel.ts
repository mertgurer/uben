import { LocaleField } from "@/i18n/routing";
import { LocaleModel } from "./LocaleModel";
import { DataUnit } from "./DataModel";
import { TextDataModel, TextDataModelType } from "./TextDataModel";
import { CountDataModel, CountDataModelType } from "./CountDataModel";
import { LengthDataModel, LengthDataModelType } from "./LengthDataModel";
import { WeightDataModel, WeightDataModelType } from "./WeightDataModel";

export interface PropertyModelType {
  key: string;
  title: LocaleField;
  data:
    | WeightDataModelType
    | CountDataModelType
    | TextDataModelType
    | LengthDataModelType;
}

export class PropertyModel {
  key: string;
  title: LocaleModel;
  data: CountDataModel | TextDataModel | LengthDataModel | WeightDataModel;

  constructor(prop: PropertyModelType) {
    this.key = prop.key;
    this.title = new LocaleModel(prop.title);

    switch (prop.data.unit) {
      case DataUnit.COUNT:
        this.data = new CountDataModel(prop.data.value);
        break;
      case DataUnit.WEIGHT:
        this.data = new WeightDataModel(prop.data.value);
        break;
      case DataUnit.LENGTH:
        this.data = new LengthDataModel(
          prop.data.value as {
            width: number;
            height: number;
            depth: number;
          }
        );
        break;
      case DataUnit.TEXT:
        this.data = new TextDataModel(prop.data.value);
        break;
      default:
        throw new Error(`Unknown unit type: ${prop.data}`);
    }
  }

  static emptyCountProperty(): PropertyModel {
    return new PropertyModel({
      key: "new",
      title: LocaleModel.empty(),
      data: {
        unit: DataUnit.COUNT,
        value: { amount: 0, unitText: LocaleModel.empty() },
      },
    });
  }

  static emptyTextProperty(): PropertyModel {
    return new PropertyModel({
      key: "new",
      title: LocaleModel.empty(),
      data: {
        unit: DataUnit.TEXT,
        value: [LocaleModel.empty()],
      },
    });
  }

  static emptyLengthProperty(): PropertyModel {
    return new PropertyModel({
      key: "new",
      title: LocaleModel.empty(),
      data: {
        unit: DataUnit.LENGTH,
        value: { width: 0, height: 0, depth: 0 },
      },
    });
  }

  static emptyWeightProperty(): PropertyModel {
    return new PropertyModel({
      key: "new",
      title: LocaleModel.empty(),
      data: {
        unit: DataUnit.WEIGHT,
        value: 0,
      },
    });
  }
}
