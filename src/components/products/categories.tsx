import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/uben-logo-square.png";
import SpanL from "../common/spanL";
import { CategoryData } from "@/data/categoryData";

interface CategoriesProps {
    selectedCategories: string[];
    setSelectedCategories: (selectedCategories: string[]) => void;
}

function Categories({
    selectedCategories,
    setSelectedCategories,
}: CategoriesProps) {
    return (
        <section
            id="categories"
            style={{
                display: "grid",
                gridTemplateColumns: `repeat(${
                    CategoryData.length + 1
                }, minmax(0, 1fr))`,
            }}
            className="w-max items-center justify-center self-center py-16 gap-3 max-2xl:gap-0 
            max-md:flex max-md:justify-start max-md:gap-4 max-md:overflow-x-scroll max-md:w-full max-md:py-2 max-md:my-10 max-md:px-5"
        >
            {CategoryData.map((category) => {
                const isSelected =
                    selectedCategories.length > 0 &&
                    !selectedCategories.includes(category.key);

                return (
                    <button
                        key={category.key}
                        onClick={() =>
                            setSelectedCategories(
                                selectedCategories.includes(category.key)
                                    ? selectedCategories.filter(
                                          (x) => x !== category.key
                                      )
                                    : [...selectedCategories, category.key]
                            )
                        }
                        className={`flex flex-col items-center text-center gap-1 p-2 ${
                            isSelected ? "opacity-30" : ""
                        } duration-500`}
                    >
                        <div
                            className={`relative aspect-square w-[75%] rounded-full bg-tertiary overflow-hidden mb-4 max-2xl:w-[75%] max-md:h-28 max-md:w-auto ${
                                isSelected ? "scale-95" : ""
                            } duration-500`}
                        >
                            <Image
                                src={category.image}
                                alt={category.key}
                                fill
                                priority
                                sizes="100%"
                                className="object-contain"
                            />
                        </div>
                        <SpanL className="text-lg font-semibold max-2xl:text-base max-md:whitespace-nowrap">{`Products.Categories.${category.key}.title`}</SpanL>
                        <SpanL>{`Products.Categories.${category.key}.description`}</SpanL>
                    </button>
                );
            })}
            <button
                onClick={() => setSelectedCategories([])}
                className={`flex flex-col items-center text-center gap-1 p-2 ${
                    selectedCategories.length > 0 ? "opacity-30" : ""
                } duration-500`}
            >
                <div
                    className={`relative aspect-square w-[85%] rounded-full bg-primary overflow-hidden mb-4 max-2xl:w-[75%] max-md:h-28 max-md:w-auto ${
                        selectedCategories.length > 0 ? "scale-95" : ""
                    } duration-500`}
                >
                    <Image
                        src={Logo}
                        alt={"uben-logo"}
                        fill
                        priority
                        sizes="100%"
                        className="object-contain scale-80"
                    />
                </div>
                <SpanL className="text-lg font-semibold max-md:whitespace-nowrap">
                    Common.all
                </SpanL>
                <SpanL>Products.allProducts</SpanL>
            </button>
        </section>
    );
}

export default Categories;
