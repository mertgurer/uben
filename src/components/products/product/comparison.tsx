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
            <div className="grid grid-cols-[3fr_2fr_2fr] min-w-max max-md:grid-cols-3">
                <div className="min-w-max py-6 px-10 border-b border-tertiary max-md:px-4" />
                <div className="min-w-max flex gap-2 justify-center px-6 py-10 border-b border-tertiary text-3xl font-medium bg-primary max-2xl:text-2xl max-md:px-4">
                    <span>150</span>
                    <SpanL>Product.sheets</SpanL>
                </div>
                <div className="min-w-max flex gap-2 justify-center px-6 py-10 border-b border-tertiary text-3xl font-medium max-2xl:text-2xl max-md:px-4">
                    <span>200</span>
                    <SpanL>Product.sheets</SpanL>
                </div>
                {Object.entries(product.detail).map(([key, value]) => {
                    const displayValue =
                        ProductDisplayHelpers.formatProductValue(
                            key as keyof ProductModel["detail"],
                            product.detail,
                            measurement
                        );

                    const displayUnit = ProductDisplayHelpers.formatProductUnit(
                        value.unit,
                        measurement
                    );

                    return (
                        <Fragment key={key}>
                            <SpanL className="flex h-full py-6 px-10 opacity-80 self-center text-nowrap border-b border-tertiary/50 max-md:px-4">{`Product.${key}`}</SpanL>
                            <div className="flex h-full items-end gap-1 p-6 justify-center bg-primary text-nowrap border-b border-tertiary/50 max-md:items-center max-md:px-4">
                                <span className="text-lg">{displayValue}</span>
                                <SpanL className="mb-px">{displayUnit}</SpanL>
                            </div>
                            <div className="flex h-full items-end gap-1 p-6 justify-center text-nowrap border-b border-tertiary/50 max-md:items-center max-md:px-4">
                                <span className="text-lg">{displayValue}</span>
                                <SpanL className="mb-px">{displayUnit}</SpanL>
                            </div>
                        </Fragment>
                    );
                })}
            </div>
        </div>
    );
}

export default Comparison;
