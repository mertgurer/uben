"use client";

import React, { useState } from "react";
import { ProductModel } from "@/data/productData";
import SpanL from "@/components/common/spanL";
import Combobox from "@/components/common/combobox";
import ButtonL from "@/components/common/buttonL";
import { Dot, Download } from "lucide-react";

interface Props {
    product: ProductModel;
}

function Info({ product }: Props) {
    const [selectedColorIndex, setSelectedColorIndex] = useState(0);

    return (
        <div className="flex-1 flex flex-col gap-6 mt-3">
            <Combobox
                name="Product.variants"
                label="Product.variants"
                options={product.variants}
                dark
                noEmptySelection
                noTranslation
            />
            <div className="flex flex-col gap-1">
                <SpanL>Product.paperKind</SpanL>
                <div className="flex w-full items-center justify-between">
                    <div className="flex gap-2">
                        {product.colors.map((color, index) => (
                            <ButtonL
                                key={color}
                                className={`bg-trim px-4 py-2 rounded-md max-2xl:px-3 max-2xl:py-1.5 ${
                                    selectedColorIndex !== index
                                        ? "opacity-50"
                                        : "shadow-[0_2px_5px_-3px] shadow-text"
                                } duration-300`}
                                onClick={() => setSelectedColorIndex(index)}
                            >{`Colors.${color}`}</ButtonL>
                        ))}
                    </div>
                    <ButtonL
                        className="bg-trim px-4 py-2 rounded-md shadow-[0_2px_5px_-3px] shadow-text max-2xl:px-3 max-2xl:py-1.5"
                        afterElement={<Download size={16} strokeWidth={1.75} />}
                        onClick={() => console.log(product.pdf)}
                    >
                        Product.pdfDownload
                    </ButtonL>
                </div>
            </div>
            <SpanL
                className="mt-2"
                style={{ textWrap: "stable" }}
            >{`Products.${product.key}.detail`}</SpanL>
            <div className="flex flex-col gap-1">
                {Array.from({ length: product.bulletPointCount }).map(
                    (_, index) => (
                        <div key={index} className="flex gap-2">
                            <Dot
                                size={20}
                                strokeWidth={5}
                                className="shrink-0 text-primary"
                            />
                            <SpanL style={{ textWrap: "stable" }}>{`Products.${
                                product.key
                            }.bulletPoints.item-${index + 1}`}</SpanL>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Info;
