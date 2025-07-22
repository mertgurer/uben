import { StaticImageData } from "next/image";
import ZPaper from "../../public/images/products/z-paper.png";
import PaperTowel from "../../public/images/products/paper-towel.png";
import CenterPullPaper from "../../public/images/products/center-pull-paper.png";
import DinnerNapkin from "../../public/images/products/dinner-napkin.png";

export interface CategoryModel {
    key: string;
    image: StaticImageData;
}

export const CategoryData: CategoryModel[] = [
    {
        key: "zPaper",
        image: ZPaper,
    },
    {
        key: "paperTowel",
        image: PaperTowel,
    },
    {
        key: "centerPullPaper",
        image: CenterPullPaper,
    },
    {
        key: "dinnerNapkin",
        image: DinnerNapkin,
    },
];
