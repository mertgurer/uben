"use client";

import React, { Fragment, useState } from "react";
import ProductTabData from "@/data/productTabData.json";
import ButtonL from "@/components/common/buttonL";
import SpanL from "@/components/common/spanL";
import { ChevronRight } from "lucide-react";

function DetailInfo() {
    const [activeTab, setActiveTab] = useState(ProductTabData[0].key);
    const [measurement, setMeasurement] = useState<"metric" | "imperial">(
        "metric"
    );

    return (
        <div className="flex flex-col bg-secondary text-tertiary px-[15%] py-14 gap-6">
            <div className="flex gap-8">
                {ProductTabData.map((tab, index) => {
                    return (
                        <Fragment key={tab.key}>
                            <ButtonL
                                className={`text-2xl  ${
                                    activeTab === tab.key ? "" : "opacity-70"
                                } duration-200`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {`Product.${tab.key}.title`}
                            </ButtonL>
                            {index !== ProductTabData.length - 1 && (
                                <span className="w-[2px] bg-tertiary opacity-50" />
                            )}
                        </Fragment>
                    );
                })}
            </div>
            <SpanL className="text-wrap">{`Product.${activeTab}.info`}</SpanL>
            <div className="flex gap-8 mt-2 h-full items-center">
                <SpanL className="text-xl">{`Product.${activeTab}.subTitle`}</SpanL>
                {activeTab === "productDetail" && (
                    <>
                        <span className="h-7 w-px bg-tertiary opacity-50" />
                        <div className="relative flex items-center justify-center gap-2">
                            <div className="flex relative rounded-full bg-primary/80 overflow-hidden">
                                <ButtonL
                                    onClick={() => setMeasurement("imperial")}
                                    className="px-8 py-2 ml-3"
                                >{`Product.metric`}</ButtonL>
                                <ButtonL
                                    onClick={() => setMeasurement("metric")}
                                    className={`absolute flex justify-center w-full! h-full bg-primary ${
                                        measurement === "metric"
                                            ? "-translate-x-full"
                                            : "-translate-x-3"
                                    } duration-500`}
                                >{`Product.imperial`}</ButtonL>
                            </div>
                            <div
                                className={`absolute flex items-center justify-center h-8 aspect-square rounded-full bg-tertiary ${
                                    measurement === "imperial"
                                        ? "right-0"
                                        : "right-full translate-x-full"
                                } duration-500`}
                            >
                                <ChevronRight
                                    onClick={() =>
                                        measurement === "metric"
                                            ? setMeasurement("imperial")
                                            : setMeasurement("metric")
                                    }
                                    className={`text-primary cursor-pointer ${
                                        measurement === "imperial"
                                            ? "-rotate-y-180 mr-0.5"
                                            : "ml-0.5"
                                    } duration-500`}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default DetailInfo;
