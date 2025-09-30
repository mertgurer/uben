import { StaticImageData } from "next/image";
import { Category } from "./categoryData";
import ToiletPaper from "../../public/images/products/toilet-paper.png";
import PaperTowel from "../../public/images/products/paper-towel.png";
import PaperTowel2 from "../../public/images/products/paper-towel_2.jpg";
import Napkin from "../../public/images/products/dinner-napkin.png";
import CPullPaper from "../../public/images/products/c-pull-paper.png";
import ZPaper from "../../public/images/products/z-paper.png";
import ZPaper2 from "../../public/images/products/z-paper_2.jpg";
import ZPaper3 from "../../public/images/products/z-paper_3.jpg";
import LunchNapkin from "../../public/images/products/lunchNapkin.png";
import CenterPullMaxi from "../../public/images/products/center-pull-maxi.jpg";
import CenterPullMini from "../../public/images/products/center-pull-mini.jpg";

export interface ProductModel {
  key: string;
  category: Category;
  cover: StaticImageData;
  images: StaticImageData[];
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

export const ProductData: ProductModel[] = [
  {
    key: "zFoldPaper",
    category: Category.HAND_TOWEL,
    cover: ZPaper,
    images: [ZPaper2, ZPaper3],
    pdf: "",
    bulletPointCount: 4,
    variants: [
      {
        key: "150Sheets",
        productCode: "UBZ150",
        properties: {
          sheetCount: { data: 150, unit: "sheets" },
          sheetSize: {
            data: { width: 21, height: 21 },
            unit: "length",
          },
          plyRating: { data: 2, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 12, unit: "rolls" },
          sheetCountPerCase: { data: 1800, unit: "count" },
          caseSize: {
            data: { width: 43, height: 33, depth: 22 },
            unit: "length",
          },
          caseWeight: { data: 2.7, unit: "weight" },
        },
      },
      {
        key: "200Sheets",
        productCode: "UBZ200",
        properties: {
          sheetCount: { data: 200, unit: "sheets" },
          sheetSize: {
            data: { width: 21, height: 21 },
            unit: "length",
          },
          plyRating: { data: 2, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 12, unit: "rolls" },
          sheetCountPerCase: { data: 2400, unit: "count" },
          caseSize: {
            data: { width: 43, height: 33, depth: 22 },
            unit: "length",
          },
          caseWeight: { data: 3.8, unit: "weight" },
        },
      },
    ],
  },
  {
    key: "rollPaper",
    category: Category.HAND_TOWEL,
    cover: PaperTowel,
    images: [PaperTowel2],
    pdf: "",
    bulletPointCount: 3,
    variants: [
      {
        key: "1ply4kg",
        productCode: "UBHT4",
        properties: {
          sheetCountPerRoll: { data: 733, unit: "sheets" },
          sheetSize: {
            data: { width: 11.5, height: 21 },
            unit: "length",
          },
          plyRating: { data: 1, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 6, unit: "rolls" },
          sheetCountPerCase: { data: 4400, unit: "count" },
          packWeight: { data: 4, unit: "weight" },
        },
      },
      {
        key: "2ply4kg",
        productCode: "UBHC4",
        properties: {
          sheetCountPerRoll: { data: 566, unit: "sheets" },
          sheetSize: {
            data: { width: 11.5, height: 21 },
            unit: "length",
          },
          plyRating: { data: 2, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 6, unit: "rolls" },
          sheetCountPerCase: { data: 3400, unit: "count" },
          packWeight: { data: 4, unit: "weight" },
        },
      },
      {
        key: "2ply5kgLarge",
        productCode: "UBHC5",
        properties: {
          sheetCountPerRoll: { data: 710, unit: "sheets" },
          sheetSize: {
            data: { width: 11.5, height: 21 },
            unit: "length",
          },
          plyRating: { data: 2, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 6, unit: "rolls" },
          sheetCountPerCase: { data: 4250, unit: "count" },
          packWeight: { data: 5, unit: "weight" },
        },
      },
    ],
  },
  {
    key: "centerPullToiletPaper",
    category: Category.TOILET_PAPER,
    cover: CenterPullMaxi,
    images: [CenterPullMini],
    pdf: "",
    bulletPointCount: 4,
    variants: [
      {
        key: "mini",
        productCode: "UBMT5200",
        properties: {
          sheetSize: {
            data: { width: 21, height: 21 },
            unit: "length",
          },
          diameter: { data: 16.5, unit: "length" },
          plyRating: { data: 2, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 6, unit: "rolls" },
          sheetCountPerCase: { data: 5200, unit: "count" },
          sheetCountPerRoll: { data: 866, unit: "sheets" },
          packWeight: { data: 4, unit: "weight" },
        },
      },
      {
        key: "maxi",
        productCode: "UBMT3150",
        properties: {
          sheetSize: {
            data: { width: 21, height: 21 },
            unit: "length",
          },
          diameter: { data: 15.5, unit: "length" },
          plyRating: { data: 2, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 12, unit: "rolls" },
          sheetCountPerCase: { data: 3154, unit: "count" },
          sheetCountPerRoll: { data: 264, unit: "sheets" },
          packWeight: { data: 4, unit: "weight" },
        },
      },
    ],
  },
  {
    key: "jumboToiletPaper",
    category: Category.TOILET_PAPER,
    cover: ToiletPaper,
    images: [],
    pdf: "",
    bulletPointCount: 2,
    variants: [
      {
        key: "standard",
        productCode: "UBJ4150",
        properties: {
          sheetSize: {
            data: { width: 10, height: 24 },
            unit: "length",
          },
          diameter: { data: 17, unit: "length" },
          plyRating: { data: 2, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 12, unit: "rolls" },
          sheetCountPerCase: { data: 4150, unit: "count" },
          sheetCountPerRoll: { data: 345, unit: "sheets" },
          packWeight: { data: 4, unit: "weight" },
        },
      },
    ],
  },
  {
    key: "foldDispenserNapkin",
    category: Category.NAPKIN,
    cover: CPullPaper,
    images: [],
    pdf: "",
    bulletPointCount: 3,
    variants: [
      {
        key: "standard",
        productCode: "UBZF200",
        properties: {
          sheetSize: {
            data: { width: 21, height: 10 },
            unit: "length",
          },
          plyRating: { data: 2, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 24, unit: "rolls" },
          sheetCount: { data: 4800, unit: "sheets" },
          sheetCountPerCase: { data: 200, unit: "count" },
          caseWeight: { data: 3.8, unit: "weight" },
        },
      },
    ],
  },
  {
    key: "lunchNapkin",
    category: Category.NAPKIN,
    cover: LunchNapkin,
    images: [],
    pdf: "",
    bulletPointCount: 4,
    variants: [
      {
        key: "standard",
        productCode: "UBP5510",
        properties: {
          sheetSize: {
            data: { width: 21, height: 17 },
            unit: "length",
          },
          plyRating: { data: 2, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 24, unit: "rolls" },
          sheetCount: { data: 2400, unit: "sheets" },
          sheetCountPerCase: { data: 100, unit: "count" },
          caseWeight: { data: 2.8, unit: "weight" },
        },
      },
    ],
  },
  {
    key: "paperNapkin",
    category: Category.NAPKIN,
    cover: Napkin,
    images: [],
    pdf: "",
    bulletPointCount: 4,
    variants: [
      {
        key: "standard",
        productCode: "UBP5555",
        properties: {
          openSheetSize: {
            data: { width: 33, height: 33 },
            unit: "length",
          },
          sheetSize: {
            data: { width: 15.5, height: 8.5 },
            unit: "length",
          },
          plyRating: { data: 2, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 12, unit: "rolls" },
          sheetCount: { data: 1200, unit: "sheets" },
          sheetCountPerCase: { data: 100, unit: "count" },
          caseWeight: { data: 4.7, unit: "weight" },
        },
      },
    ],
  },
  {
    key: "cDispenserPaperNapkin",
    category: Category.NAPKIN,
    cover: CPullPaper,
    images: [],
    pdf: "",
    bulletPointCount: 4,
    variants: [
      {
        key: "standard",
        productCode: "UBC200",
        properties: {
          openSheetSize: {
            data: { width: 21, height: 17 },
            unit: "length",
          },
          sheetSize: {
            data: { width: 9, height: 13.5 },
            unit: "length",
          },
          plyRating: { data: 1, unit: "ply" },
          color: { data: "white", unit: "color" },
          packCount: { data: 18, unit: "rolls" },
          sheetCount: { data: 3600, unit: "sheets" },
          sheetCountPerCase: { data: 200, unit: "count" },
          caseWeight: { data: 2.8, unit: "weight" },
        },
      },
    ],
  },
];
