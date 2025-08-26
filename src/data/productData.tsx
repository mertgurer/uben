import { StaticImageData } from "next/image";
import { Category } from "./categoryData";
import ToiletPaper from "../../public/images/products/toilet-paper.png";
import PaperTowel from "../../public/images/products/paper-towel.png";
import Napkin from "../../public/images/products/dinner-napkin.png";
import CPullPaper from "../../public/images/products/c-pull-paper.png";
import ZPaper from "../../public/images/products/z-paper.png";
import LunchNapkin from "../../public/images/products/lunchNapkin.png";
import CenterPullMaxi from "../../public/images/products/center-pull-maxi.jpg";
import CenterPullMini from "../../public/images/products/center-pull-mini.jpg";

export interface ProductModel {
    key: string;
    category: Category;
    productCode: string;
    cover: StaticImageData;
    images: StaticImageData[];
    pdf: string;
    bulletPointCount: number;
    variants: ProductVariantModel[];
}

export interface ProductVariantModel {
    key: string;
    properties: ProductVariantPropertiesModel;
}

export interface ProductVariantPropertiesModel {
    color: {
        data: string;
        unit: "color";
    };
    [key: string]: {
        data:
            | string
            | number
            | { width: number; height: number; depth?: number };
        unit: string;
    };
}

export const ProductData: ProductModel[] = [
    {
        key: "zFoldPaper",
        category: Category.HAND_TOWEL,
        productCode: "SKU 5510055",
        cover: ZPaper,
        images: [ZPaper, ZPaper, ZPaper],
        pdf: "",
        bulletPointCount: 4,
        variants: [
            {
                key: "150Sheets",
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
        productCode: "SKU 5510055",
        cover: PaperTowel,
        images: [PaperTowel, PaperTowel, PaperTowel],
        pdf: "",
        bulletPointCount: 3,
        variants: [
            {
                key: "1ply4kg",
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
                key: "2ply4kgLarge",
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
        productCode: "SKU 5510055",
        cover: CenterPullMaxi,
        images: [CenterPullMaxi, CenterPullMini, CenterPullMini],
        pdf: "",
        bulletPointCount: 4,
        variants: [
            {
                key: "mini",
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
            {
                key: "standard",
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
        ],
    },
    {
        key: "jumboToiletPaper",
        category: Category.TOILET_PAPER,
        productCode: "SKU 5510055",
        cover: ToiletPaper,
        images: [ToiletPaper, ToiletPaper, ToiletPaper],
        pdf: "",
        bulletPointCount: 2,
        variants: [
            {
                key: "standard",
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
        productCode: "SKU 5510055",
        cover: CPullPaper,
        images: [CPullPaper, CPullPaper, CPullPaper],
        pdf: "",
        bulletPointCount: 3,
        variants: [
            {
                key: "standard",
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
        productCode: "SKU 5510055",
        cover: LunchNapkin,
        images: [LunchNapkin, LunchNapkin, LunchNapkin],
        pdf: "",
        bulletPointCount: 4,
        variants: [
            {
                key: "standard",
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
        productCode: "SKU 5510055",
        cover: Napkin,
        images: [Napkin, Napkin, Napkin],
        pdf: "",
        bulletPointCount: 4,
        variants: [
            {
                key: "standard",
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
        productCode: "SKU 5510055",
        cover: CPullPaper,
        images: [CPullPaper, CPullPaper, CPullPaper],
        pdf: "",
        bulletPointCount: 4,
        variants: [
            {
                key: "standard",
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
