import { LocaleField, LocaleTypes } from "@/i18n/routing";
import { DataModel, DataUnit, DataUnitType } from "./DataModel";
import { LocaleModel } from "./LocaleModel";

export interface TextDataModelType {
  unit: typeof DataUnit.TEXT;
  value: LocaleField[];
}

export class TextDataModel extends DataModel<
  typeof DataUnit.TEXT,
  LocaleModel[],
  { displayLocale: LocaleTypes }
> {
  static isType(unit: DataUnitType): unit is typeof DataUnit.TEXT {
    return unit === DataUnit.TEXT;
  }

  constructor(value: TextDataModelType["value"]) {
    super(
      DataUnit.TEXT,
      value.map((v) => new LocaleModel(v))
    );
  }

  displayText(args: { displayLocale: LocaleTypes }): string {
    return this.value
      .map((item) => item.displayText(args.displayLocale))
      .filter((t) => t.trim().length > 0)
      .join(", ");
  }
}
