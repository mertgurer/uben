"use client";

import React from "react";
import SpanL from "@/components/common/spanL";
import Image from "next/image";
import PaperTowelInteraction from "../../../../public/images/paper-towel-interaction.png";
import ToiletRollInteraction from "../../../../public/images/toilet-roll-interaction.png";
import { motion } from "motion/react";

function Stats() {
    return (
        <section
            id="stats"
            className="flex flex-col gap-20 px-[15%] py-28 text-primary"
        >
            <div className="flex justify-between gap-32">
                <SpanL className="flex-1 text-5xl max-2xl:text-4xl">
                    About.Stats.title
                </SpanL>
                <SpanL className="flex-1">About.Stats.description</SpanL>
            </div>
            <div className="flex gap-10 aspect-[2.2]">
                <motion.div
                    initial={{ x: -32, opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="flex-1 flex flex-col gap-14 bg-primary/35 p-8 justify-between"
                >
                    <span className="text-6xl font-semibold">30%</span>
                    <div className="flex flex-col gap-1">
                        <SpanL>About.Stats.info-1.title</SpanL>
                        <SpanL
                            style={{ textWrap: "stable" }}
                            className="text-sm"
                        >
                            About.Stats.info-1.detail
                        </SpanL>
                    </div>
                </motion.div>
                <div className="flex-1 flex flex-col gap-10">
                    <motion.div
                        initial={{ opacity: 0, filter: "blur(2px)" }}
                        whileInView={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                        className="relative flex flex-col flex-4 justify-between bg-primary/35 p-8"
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
                        initial={{ y: 32, opacity: 0, filter: "blur(2px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="flex flex-col flex-5 justify-between bg-primary/35 p-8"
                    >
                        <span className="text-6xl font-semibold">30%</span>
                        <div className="flex flex-col gap-1">
                            <SpanL>About.Stats.info-2.title</SpanL>
                            <SpanL
                                style={{ textWrap: "stable" }}
                                className="text-sm"
                            >
                                About.Stats.info-2.detail
                            </SpanL>
                        </div>
                    </motion.div>
                </div>
                <div className="flex-1 flex flex-col gap-10">
                    <motion.div
                        initial={{ y: -32, opacity: 0, filter: "blur(2px)" }}
                        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="flex flex-col flex-5 justify-between bg-primary/35 p-8"
                    >
                        <span className="text-6xl font-semibold">30%</span>
                        <div className="flex flex-col gap-1">
                            <SpanL>About.Stats.info-3.title</SpanL>
                            <SpanL
                                style={{ textWrap: "stable" }}
                                className="text-sm"
                            >
                                About.Stats.info-3.detail
                            </SpanL>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 32, opacity: 0, filter: "blur(2px)" }}
                        whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="relative flex flex-col flex-4 justify-between bg-primary/35 p-8"
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
