import React from "react";
import SpanL from "@/components/common/spanL";
import LinkL from "@/components/common/linkL";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import ZPaper from "../../../public/images/products/z-paper.png";
import PaperTowel from "../../../public/images/products/paper-towel.png";
import CenterPullPaper from "../../../public/images/products/center-pull-paper.png";

const ProductItems = [
    { key: "zPaper", image: ZPaper },
    { key: "paperTowel", image: PaperTowel },
    { key: "centerPullPaper", image: CenterPullPaper },
];

function Products() {
    return (
        <section
            id="products"
            className="flex flex-col items-center px-[15%] py-[100px] gap-16 text-primary text-center max-2xl:px-[10%] max-2xl:gap-10 max-md:px-[10%] max-md:pt-16 max-md:pb-10"
        >
            <SpanL className="flex-1 text-5xl max-2xl:text-4xl max-md:text-3xl">
                Home.Products.title
            </SpanL>
            <div className="flex justify-between gap-[5%] max-2xl:gap-[6%] max-md:flex-col max-md:gap-6">
                {ProductItems.map((x, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                        <div className="relative w-full aspect-square rounded-t-md overflow-hidden bg-tertiary">
                            <Image
                                src={x.image}
                                alt={"product-" + i}
                                fill
                                priority
                                sizes="100%"
                                className="object-cover max-2xl:scale-90"
                            />
                        </div>
                        <SpanL className="font-medium text-xl mt-0 mb-3 pb-2 rounded-b-md bg-tertiary max-2xl:text-lg">{`Home.Products.${x.key}.title`}</SpanL>
                        <SpanL className="mb-1 max-md:mb-0">{`Home.Products.${x.key}.description`}</SpanL>
                        <LinkL
                            href={"/products"}
                            className="group mt-auto font-medium p-2 hover:translate-x-1 duration-500"
                            afterElement={
                                <ChevronRight
                                    size={20}
                                    strokeWidth={1.5}
                                    className="group-hover:translate-x-4 duration-500"
                                />
                            }
                        >
                            {`Home.Products.${x.key}.detail`}
                        </LinkL>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
