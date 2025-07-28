import ToiletPaper from "../../public/images/products/toilet-paper.png";
import PaperTowel from "../../public/images/products/paper-towel.png";
import Napkin from "../../public/images/products/dinner-napkin.png";

export enum Category {
    HAND_TOWEL = "handTowel",
    TOILET_PAPER = "toiletPaper",
    NAPKIN = "napkin",
}

export const CategoryData = [
    { key: Category.HAND_TOWEL, image: PaperTowel },
    { key: Category.TOILET_PAPER, image: ToiletPaper },
    { key: Category.NAPKIN, image: Napkin },
];
