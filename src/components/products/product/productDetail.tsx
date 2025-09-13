import SpanL from "@/components/common/spanL";
import { ProductVariantModel } from "@/data/productData";
import { ProductDisplayHelpers } from "@/helpers/helpers";
import React from "react";

interface Props {
    variant: ProductVariantModel;
    measurement: "metric" | "imperial";
}

function ProductDetail({ variant, measurement }: Props) {
    return (
        <div className="grid grid-cols-3 gap-[2%] gap-y-10 bg-primary w-full rounded-sm px-[5%] py-[4%] max-md:grid-cols-1 max-md:gap-y-0">
            {Object.entries(variant.properties).map(([key, value], index) => {
                const displayValue = ProductDisplayHelpers.formatProductValue(
                    key,
                    variant.properties,
                    measurement
                );

                const displayUnit = ProductDisplayHelpers.formatProductUnit(
                    value.unit,
                    measurement
                );

                return (
                    <div
                        key={index}
                        className={`flex flex-col max-md:flex-row max-md:justify-between max-md:items-end max-md:py-5 ${
                            index !==
                            Object.entries(variant.properties).length - 1
                                ? "max-md:border-b max-md:border-tertiary/50"
                                : ""
                        }`}
                    >
                        <SpanL className="opacity-80">{`Product.${key}`}</SpanL>
                        <div className="flex gap-1 items-end max-md:justify-center">
                            {value.unit !== "color" ? (
                                <span className="text-lg">{displayValue}</span>
                            ) : (
                                <SpanL className="text-lg">
                                    {displayValue}
                                </SpanL>
                            )}
                            {displayUnit && (
                                <SpanL className="mb-px">{displayUnit}</SpanL>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default ProductDetail;
