import ZPaper from "../../public/images/products/z-paper.png";
import PaperTowel from "../../public/images/products/paper-towel.png";
import CenterPullPaper from "../../public/images/products/center-pull-paper.png";
import DinnerNapkin from "../../public/images/products/dinner-napkin.png";
import ToiletPaper from "../../public/images/products/toilet-paper.png";
import { StaticImageData } from "next/image";
import { CategoryData, CategoryModel } from "./categoryData";

export interface ProductModel {
    key: string;
    cover: StaticImageData;
    images: StaticImageData[];
    category: CategoryModel;
    itemCode: string;
    variants: string[];
    colors: string[];
    pdf: string;
    bulletPointCount: number;
}
export const ProductData: ProductModel[] = [
    {
        key: "centerPullPaper",
        cover: CenterPullPaper,
        images: [CenterPullPaper, CenterPullPaper, CenterPullPaper],
        category: CategoryData[2],
        itemCode: "SKU 5510055",
        variants: ["10x15", "10x20", "10x25"],
        colors: ["white", "brown"],
        pdf: "",
        bulletPointCount: 3,
    },
    {
        key: "toiletPaper",
        cover: ToiletPaper,
        images: [ToiletPaper, ToiletPaper, ToiletPaper],
        category: CategoryData[1],
        itemCode: "SKU 5510055",
        variants: ["10x15", "10x20", "10x25"],
        colors: ["white", "brown"],
        pdf: "",
        bulletPointCount: 3,
    },
    {
        key: "zPaper",
        cover: ZPaper,
        images: [ZPaper, ZPaper, ZPaper],
        category: CategoryData[0],
        itemCode: "SKU 5510055",
        variants: ["10x15", "10x20", "10x25"],
        colors: ["white", "brown"],
        pdf: "",
        bulletPointCount: 3,
    },
    {
        key: "paperTowel",
        cover: PaperTowel,
        images: [PaperTowel, PaperTowel, PaperTowel],
        category: CategoryData[1],
        itemCode: "SKU 5510055",
        variants: ["10x15", "10x20", "10x25"],
        colors: ["white", "brown"],
        pdf: "",
        bulletPointCount: 3,
    },

    {
        key: "dinnerNapkin",
        cover: DinnerNapkin,
        images: [DinnerNapkin, DinnerNapkin, DinnerNapkin],
        category: CategoryData[3],
        itemCode: "SKU 5510055",
        variants: ["10x15", "10x20", "10x25"],
        colors: ["white", "brown"],
        pdf: "",
        bulletPointCount: 3,
    },
];
