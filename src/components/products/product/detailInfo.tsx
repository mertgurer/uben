"use client";

import React, { Fragment, useState } from "react";
import ProductTabData from "@/data/productTabData.json";
import ButtonL from "@/components/common/buttonL";
// import SpanL from "@/components/common/spanL";
import { ProductModel } from "@/data/productData";
import ProductDetail from "./productDetail";
import Comparison from "./comparison";
import MeasurementButton from "./measurementButton";

interface Props {
    product: ProductModel;
}

function DetailInfo({ product }: Props) {
    const [activeTab, setActiveTab] = useState(ProductTabData[0].key);
    const [measurement, setMeasurement] = useState<"metric" | "imperial">(
        "metric"
    );

    return (
        <div className="flex flex-col bg-secondary text-tertiary px-[15%] py-14 gap-6 max-2xl:px-[10%] max-md:px-[5%]">
            <div className="flex gap-8 max-md:self-center max-md:gap-6">
                {ProductTabData.map((tab, index) => {
                    if (
                        tab.key === "comparison" &&
                        product.variants.length < 2
                    ) {
                        return null;
                    }

                    return (
                        <Fragment key={tab.key}>
                            {index !== 0 && (
                                <span className="w-[2px] bg-tertiary opacity-50" />
                            )}
                            <ButtonL
                                className={`text-2xl  ${
                                    activeTab === tab.key ? "" : "opacity-70"
                                } duration-200`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {`Product.${tab.key}.title`}
                            </ButtonL>
                        </Fragment>
                    );
                })}
                <div className="ml-auto max-md:hidden">
                    <MeasurementButton
                        measurement={measurement}
                        setMeasurement={setMeasurement}
                    />
                </div>
            </div>
            <div className="w-max self-center md:hidden">
                <MeasurementButton
                    measurement={measurement}
                    setMeasurement={setMeasurement}
                />
            </div>
            {/* <SpanL className="text-wrap">{`Product.${activeTab}.info`}</SpanL> */}
            {/* <div className="flex gap-8 h-full items-center max-md:mt-5">
                <SpanL className="text-xl">{`Product.${activeTab}.subTitle`}</SpanL>
                <span className="h-7 w-px bg-tertiary opacity-50" />
                <MeasurementButton
                    measurement={measurement}
                    setMeasurement={setMeasurement}
                />
            </div> */}
            <div>
                {activeTab === ProductTabData[0].key ? (
                    <ProductDetail
                        product={product}
                        measurement={measurement}
                    />
                ) : activeTab === ProductTabData[1].key ? (
                    <Comparison product={product} measurement={measurement} />
                ) : null}
            </div>
        </div>
    );
}

export default DetailInfo;
