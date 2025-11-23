import { DataModel, DataUnit, DataUnitType, UnitType } from "./DataModel";

export interface WeightDataModelType {
  unit: typeof DataUnit.WEIGHT;
  value: number;
}

export class WeightDataModel extends DataModel<
  typeof DataUnit.WEIGHT,
  number,
  { weightUnit: UnitType }
> {
  static isType(unit: DataUnitType): unit is typeof DataUnit.WEIGHT {
    return unit === DataUnit.WEIGHT;
  }

  constructor(value: WeightDataModelType["value"]) {
    super(DataUnit.WEIGHT, value);
  }

  private convert(value: number, unit: UnitType): number {
    if (unit === "imperial") return +(value * 2.20462).toFixed(2);
    return value;
  }

  displayText(args: { weightUnit: UnitType }): string {
    return `${this.convert(this.value, args.weightUnit)} ${
      args.weightUnit === "imperial" ? "lbs" : "kg"
    }`;
  }
}
