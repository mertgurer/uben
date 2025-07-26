"use client";

import React from "react";
import SpanL from "@/components/common/spanL";
import Image from "next/image";
import PaperTowelInteraction from "../../../public/images/paper-towel-interaction.png";
import ToiletRollInteraction from "../../../public/images/toilet-roll-interaction.png";
import { motion } from "motion/react";
import { useMobile } from "@/hooks/useMobile";
import ProductRatio from "@/data/productRatioData.json";

function Stats() {
    const isMobile = useMobile();

    return (
        <section
            id="stats"
            className="flex flex-col gap-20 px-[15%] py-28 text-primary overflow-hidden max-2xl:px-[10%] max-md:px-[5%] max-md:py-20 max-md:gap-8"
        >
            <div className="flex justify-between gap-32 max-md:flex-col max-md:gap-8">
                <SpanL className="flex-1 text-5xl max-2xl:text-4xl">
                    About.Stats.title
                </SpanL>
                <SpanL className="flex-1">About.Stats.description</SpanL>
            </div>
            <div className="flex gap-10 aspect-[2.2] max-2xl:gap-6 max-md:flex-col max-md:gap-2">
                <motion.div
                    initial={{ x: -32, opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="flex-1 flex flex-col gap-14 bg-primary/35 p-8 justify-between max-2xl:flex-4 max-md:p-6 max-md:gap-2 max-md:flex-1"
                >
                    <span className="text-6xl font-semibold">30%</span>
                    <div className="flex flex-col gap-1">
                        <SpanL className="text-lg font-medium">{`About.Stats.${ProductRatio[0].key}.title`}</SpanL>
                        <SpanL
                            style={{ textWrap: "stable" }}
                            className="text-sm max-md:text-wrap"
                        >
                            {`About.Stats.${ProductRatio[0].key}.detail`}
                        </SpanL>
                    </div>
                </motion.div>
                <div className="flex-1 flex flex-col gap-10 max-2xl:gap-6 max-2xl:flex-5 max-md:flex-1">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(2px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="relative flex flex-col flex-4 justify-between bg-primary/35 p-8 max-md:hidden"
                    >
                        <Image
                            src={PaperTowelInteraction}
                            alt={"paper-towel-interaction"}
                            fill
                            priority
                            sizes="100%"
                            className="object-cover"
                        />
                    </motion.div>
                    <motion.div
                        key={isMobile ? "mobile" : "desktop"}
                        initial={
                            isMobile
                                ? { x: 32, opacity: 0, filter: "blur(2px)" }
                                : { y: 32, opacity: 0, filter: "blur(2px)" }
                        }
                        whileInView={
                            isMobile
                                ? { x: 0, opacity: 1, filter: "blur(0px)" }
                                : { y: 0, opacity: 1, filter: "blur(0px)" }
                        }
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="flex flex-col flex-5 justify-between bg-primary/35 p-8 max-md:p-6 max-md:gap-2"
                    >
                        <span className="text-6xl font-semibold">30%</span>
                        <div className="flex flex-col gap-1">
                            <SpanL className="text-lg font-medium">{`About.Stats.${ProductRatio[1].key}.title`}</SpanL>
                            <SpanL
                                style={{ textWrap: "stable" }}
                                className="text-sm"
                            >
                                {`About.Stats.${ProductRatio[1].key}.detail`}
                            </SpanL>
                        </div>
                    </motion.div>
                </div>
                <div className="flex-1 flex flex-col gap-10 max-2xl:gap-6 max-2xl:flex-5 max-md:flex-1">
                    <motion.div
                        key={isMobile ? "mobile" : "desktop"}
                        initial={
                            isMobile
                                ? { x: -32, opacity: 0, filter: "blur(2px)" }
                                : { y: -32, opacity: 0, filter: "blur(2px)" }
                        }
                        whileInView={
                            isMobile
                                ? { x: 0, opacity: 1, filter: "blur(0px)" }
                                : { y: 0, opacity: 1, filter: "blur(0px)" }
                        }
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="flex flex-col flex-5 justify-between bg-primary/35 p-8 max-md:p-6 max-md:gap-2"
                    >
                        <span className="text-6xl font-semibold">30%</span>
                        <div className="flex flex-col gap-1">
                            <SpanL className="text-lg font-medium">{`About.Stats.${ProductRatio[2].key}.title`}</SpanL>
                            <SpanL
                                style={{ textWrap: "stable" }}
                                className="text-sm"
                            >
                                {`About.Stats.${ProductRatio[2].key}.detail`}
                            </SpanL>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 32, opacity: 0, filter: "blur(2px)" }}
                        whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="relative flex flex-col flex-4 justify-between bg-primary/35 p-8 max-md:hidden"
                    >
                        <Image
                            src={ToiletRollInteraction}
                            alt={"toilet-roll-interaction"}
                            fill
                            priority
                            sizes="100%"
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Stats;
