import SpanL from "@/components/common/spanL";
import { ProductModel } from "@/data/productData";
import { ProductDisplayHelpers } from "@/helpers/helpers";
import React, { Fragment } from "react";

interface Props {
    product: ProductModel;
    measurement: "metric" | "imperial";
}

function Comparison({ product, measurement }: Props) {
    return (
        <div className="max-md:overflow-x-auto my-4">
            <div
                className={`min-w-max grid ${
                    product.variants.length === 2
                        ? "grid-cols-[3fr_2fr_2fr] max-md:grid-cols-3"
                        : product.variants.length === 3
                        ? "grid-cols-[3fr_2fr_2fr_2fr] max-md:grid-cols-4"
                        : ""
                } `}
            >
                <div className="min-w-max py-6 px-10 border-b border-tertiary max-md:px-4" />
                {product.variants.map((variant, index) => {
                    return (
                        <div
                            key={variant.key}
                            className={`min-w-max flex gap-2 justify-center px-6 py-10 border-b border-tertiary text-3xl font-medium max-2xl:text-2xl max-md:px-4 ${
                                index % 2 === 0 ? "bg-primary" : ""
                            }`}
                        >
                            <SpanL>{`Product.${variant.key}`}</SpanL>
                        </div>
                    );
                })}
                {Object.entries(product.variants[0].properties).map(
                    ([key, value]) => {
                        return (
                            <Fragment key={key}>
                                <SpanL className="flex h-full py-6 px-10 opacity-80 self-center text-nowrap border-b border-tertiary/50 max-md:px-4">{`Product.${key}`}</SpanL>
                                {product.variants.map((variant, index) => {
                                    const displayValue =
                                        ProductDisplayHelpers.formatProductValue(
                                            key,
                                            product.variants[index].properties,
                                            measurement
                                        );

                                    const displayUnit =
                                        ProductDisplayHelpers.formatProductUnit(
                                            product.variants[index].properties[
                                                key
                                            ].unit,
                                            measurement
                                        );
                                    return (
                                        <div
                                            key={variant.key}
                                            className={`flex h-full items-end gap-1 p-6 justify-center text-nowrap border-b border-tertiary/50 max-md:items-center max-md:px-4 ${
                                                index % 2 === 0
                                                    ? "bg-primary"
                                                    : ""
                                            }`}
                                        >
                                            {value.unit !== "color" ? (
                                                <span className="text-lg">
                                                    {displayValue}
                                                </span>
                                            ) : (
                                                <SpanL className="text-lg">
                                                    {displayValue}
                                                </SpanL>
                                            )}
                                            {displayUnit && (
                                                <SpanL className="mb-px">
                                                    {displayUnit}
                                                </SpanL>
                                            )}
                                        </div>
                                    );
                                })}
                            </Fragment>
                        );
                    }
                )}
            </div>
        </div>
    );
}

export default Comparison;
