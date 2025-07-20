import ZPaper from "../../public/images/products/z-paper.png";
import PaperTowel from "../../public/images/products/paper-towel.png";
import CenterPullPaper from "../../public/images/products/center-pull-paper.png";
import DinnerNapkin from "../../public/images/products/dinner-napkin.png";
import ToiletPaper from "../../public/images/products/toilet-paper.png";
import { StaticImageData } from "next/image";

export interface ProductModel {
    key: string;
    image: StaticImageData;
}

export const ProductData: ProductModel[] = [
    {
        key: "centerPullPaper",
        image: CenterPullPaper,
    },
    {
        key: "toiletPaper",
        image: ToiletPaper,
    },
    {
        key: "zPaper",
        image: ZPaper,
    },
    {
        key: "paperTowel",
        image: PaperTowel,
    },

    {
        key: "dinnerNapkin",
        image: DinnerNapkin,
    },
];
