import ToiletPaper from "../../public/images/categories/toilet_paper.png";
import HandTowel from "../../public/images/categories/hand_towel.png";
import Napkin from "../../public/images/categories/napkin.png";

export enum Category {
  HAND_TOWEL = "handTowel",
  TOILET_PAPER = "toiletPaper",
  NAPKIN = "napkin",
}

export const CategoryData = [
  { key: Category.HAND_TOWEL, image: HandTowel },
  { key: Category.TOILET_PAPER, image: ToiletPaper },
  { key: Category.NAPKIN, image: Napkin },
];
