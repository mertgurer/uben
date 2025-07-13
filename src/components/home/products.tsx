import React from "react";
import SpanL from "../common/spanL";
import LinkL from "../common/linkL";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Fold from "../../../public/images/products/fold-paper.png";
import Towel from "../../../public/images/products/paper-towel.png";
import Dispenser from "../../../public/images/products/dispenser-paper.png";

const ProductItems = [
    { key: "fold", image: Fold },
    { key: "towel", image: Towel },
    { key: "dispenser", image: Dispenser },
];

function Products() {
    return (
        <section
            id="products"
            className="flex flex-col items-center px-[15%] py-[100px] gap-16 text-primary text-center"
        >
            <SpanL className="flex-1 text-5xl">Products.title</SpanL>
            <div className="flex justify-between gap-[5%]">
                {ProductItems.map((x, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center">
                        <div className="relative w-full aspect-square rounded-t-lg overflow-hidden">
                            <Image
                                src={x.image}
                                alt={"product-" + i}
                                fill
                                priority
                                sizes="100%"
                                className="object-cover"
                            />
                        </div>
                        <SpanL className="font-medium text-xl mt-0 mb-3 pb-2 rounded-b-lg bg-tertiary">{`Products.items.${x.key}.title`}</SpanL>
                        <SpanL className="mb-1">{`Products.items.${x.key}.description`}</SpanL>
                        <LinkL
                            href={"/"}
                            afterElement={
                                <ChevronRight size={20} strokeWidth={1.5} />
                            }
                            className="mt-auto font-medium p-2"
                        >
                            {`Products.items.${x.key}.detail`}
                        </LinkL>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
