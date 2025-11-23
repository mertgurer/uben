export const DataUnit = {
  COUNT: "count",
  LENGTH: "length",
  WEIGHT: "weight",
  TEXT: "text",
} as const;

export type DataUnitType = (typeof DataUnit)[keyof typeof DataUnit];

export const DataUnitList = Object.entries(DataUnit).map(([key, value]) => ({
  key,
  value,
}));

export type UnitType = "metric" | "imperial";

export abstract class DataModel<U extends DataUnitType, V, Args> {
  constructor(public unit: U, public value: V) {}

  abstract displayText(args: Args): string;
}
