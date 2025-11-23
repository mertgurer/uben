import { DataModel, DataUnit, DataUnitType, UnitType } from "./DataModel";

export interface LengthDataModelType {
  unit: typeof DataUnit.LENGTH;
  value: { width: number; height: number; depth: number };
}

export class LengthDataModel extends DataModel<
  typeof DataUnit.LENGTH,
  { width: number; height: number; depth: number },
  { lengthUnit: UnitType }
> {
  static isType(unit: DataUnitType): unit is typeof DataUnit.LENGTH {
    return unit === DataUnit.LENGTH;
  }

  constructor(value: LengthDataModelType["value"]) {
    super(DataUnit.LENGTH, value);
  }

  private convert(value: number, unit: UnitType): number {
    if (unit === "imperial") return +(value / 2.54).toFixed(2);
    return value;
  }

  displayText(args: { lengthUnit: UnitType }): string {
    return `${this.convert(this.value.width, args.lengthUnit)} ${
      this.value.height
        ? `x ${this.convert(this.value.height, args.lengthUnit)}`
        : ""
    }  ${
      this.value.depth
        ? `x ${this.convert(this.value.depth, args.lengthUnit)}`
        : ""
    } ${args.lengthUnit === "imperial" ? "in" : "cm"}`;
  }
}
