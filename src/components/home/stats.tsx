"use client";

import React from "react";
import Image from "next/image";
import PaperTowelInteraction from "../../../public/images/paper-towel-interaction.png";
import SpanL from "../common/spanL";
import LinkL from "../common/linkL";
import { ChevronRight, Dot } from "lucide-react";
import { motion } from "motion/react";

function Stats() {
    return (
        <section
            id="stats"
            className="relative flex w-full items-center justify-center"
        >
            <div className="flex flex-col px-[15%] py-[140px] gap-[100px] bg-text/60 text-tertiary">
                <div className="flex gap-[15%]">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center -ml-6">
                            <Dot size={28} strokeWidth={1.75} />
                            <SpanL>Stats.tagline</SpanL>
                        </div>
                        <SpanL className="text-5xl mt-1">Stats.title</SpanL>
                    </div>
                    <div className="flex-1 flex flex-col mt-7">
                        <SpanL>Stats.description</SpanL>
                        <LinkL
                            href={"/"}
                            afterElement={
                                <ChevronRight size={20} strokeWidth={1.5} />
                            }
                            className="mt-8 py-2 text-justify"
                        >
                            Stats.detail
                        </LinkL>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="flex-1 flex flex-col border-l border-tertiary px-6 py-2 gap-2 overflow-hidden">
                        <motion.div
                            initial={{ x: `calc(-100% - ${24}px)` }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1.3, delay: 0.25 }}
                            viewport={{ once: true }}
                            className="text-6xl font-semibold w-max"
                        >
                            260+&nbsp;
                            <SpanL>Common.ton</SpanL>
                        </motion.div>
                        <SpanL className="font-light">
                            Stats.yearlyProduction
                        </SpanL>
                    </div>
                    <div className="flex-1 flex flex-col border-l border-tertiary px-6 py-2 gap-2 overflow-hidden">
                        <motion.span
                            initial={{ x: `calc(-100% - ${24}px)` }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1.1, delay: 0.65 }}
                            viewport={{ once: true }}
                            className="text-6xl font-semibold w-max"
                        >
                            16+
                        </motion.span>
                        <SpanL className="font-light">Common.countries</SpanL>
                    </div>
                    <div className="flex-1 flex flex-col border-l border-tertiary px-6 py-2 gap-2 overflow-hidden">
                        <motion.span
                            initial={{ x: `calc(-100% - ${24}px)` }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1.1, delay: 1.05 }}
                            viewport={{ once: true }}
                            className="text-6xl font-semibold w-max"
                        >
                            30%
                        </motion.span>
                        <SpanL className="font-light">
                            Stats.sustainabilityGrowth
                        </SpanL>
                    </div>
                </div>
            </div>
            <Image
                src={PaperTowelInteraction}
                alt={"uben-logo"}
                fill
                priority
                sizes="100%"
                className="object-cover -z-10"
            />
        </section>
    );
}

export default Stats;
