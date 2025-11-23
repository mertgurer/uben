import { LocaleField, LocaleTypes } from "@/i18n/routing";
import { DataModel, DataUnit, DataUnitType } from "./DataModel";
import { LocaleModel } from "./LocaleModel";

export interface CountDataModelType {
  unit: typeof DataUnit.COUNT;
  value: { amount: number; unitText: LocaleField };
}

export class CountDataModel extends DataModel<
  typeof DataUnit.COUNT,
  { amount: number; unitText: LocaleModel },
  { displayLocale: LocaleTypes }
> {
  static isType(unit: DataUnitType): unit is typeof DataUnit.COUNT {
    return unit === DataUnit.COUNT;
  }

  constructor(value: CountDataModelType["value"]) {
    super(DataUnit.COUNT, {
      amount: value.amount,
      unitText: new LocaleModel(value.unitText),
    });
  }

  displayText(args: { displayLocale: LocaleTypes }): string {
    return `${this.value.amount.toLocaleString()} ${this.value.unitText.displayText(
      args.displayLocale
    )}`;
  }
}
