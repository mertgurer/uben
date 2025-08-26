"use client";

import React from "react";
import Image from "next/image";
import WorldCities from "@/data/world-cities.json";
import WorldSvg from "../../../public/images/world.svg";
import MarkerSvg from "../../../public/images/marker.svg";
import MarkerPrimarySvg from "../../../public/images/marker-primary.svg";
import { motion } from "motion/react";
import SpanL from "@/components/common/spanL";

function WorldDistribution() {
    return (
        <section
            id="worldDistribution"
            className="flex flex-col px-[15%] pt-[100px] -mb-10 gap-10 max-2xl:px-[10%] max-md:pt-20 max-md:pb-5 max-md:px-0 max-md:gap-8 max-md:mb-0"
        >
            <div className="flex flex-col gap-2 items-center text-center max-md:flex-col max-md:px-[5%] max-md:gap-4">
                <SpanL className="flex-1 text-5xl font-medium mt-1 max-2xl:text-4xl">
                    Home.WorldDistribution.title
                </SpanL>
                <SpanL className="flex-1 md:text-end">
                    Home.WorldDistribution.description
                </SpanL>
            </div>
            <div className="relative aspect-[2.1933]">
                <Image
                    src={WorldSvg}
                    alt={"world"}
                    fill
                    priority
                    sizes="100%"
                    className="object-contain"
                />
                {WorldCities.map((city, index) => (
                    <motion.button
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                        key={city.key}
                        className="group absolute flex justify-center h-[2vw] -translate-x-1/2 aspect-square max-2xl:h-[2.5vw] max-md:h-[4vw]"
                        style={{
                            bottom: `${city.yValue}%`,
                            left: `${city.xValue}%`,
                        }}
                    >
                        <SpanL
                            className="absolute bg-primary text-tertiary px-2 w-max rounded-sm opacity-0 -translate-y-[95%] 
                        group-hover:opacity-100 group-hover:-translate-y-[120%] duration-500"
                        >
                            {`Cities.${city.key}`}
                        </SpanL>
                        <Image
                            src={MarkerSvg}
                            alt={"marker"}
                            fill
                            priority
                            sizes="100%"
                            className="object-contain"
                        />
                        <Image
                            src={MarkerPrimarySvg}
                            alt={"marker"}
                            fill
                            priority
                            sizes="100%"
                            className="object-contain opacity-0 group-hover:opacity-100 duration-300"
                        />
                    </motion.button>
                ))}
            </div>
        </section>
    );
}

export default WorldDistribution;
