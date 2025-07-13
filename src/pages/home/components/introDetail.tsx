"use client";

import React from "react";
import Image from "next/image";
import ToiletRollInteraction from "../../../../public/images/toilet-roll-interaction.png";
import SpanL from "@/components/common/spanL";
import LinkL from "@/components/common/linkL";
import { motion } from "motion/react";

function IntroDetail() {
    return (
        <section
            id="introDetail"
            className="relative flex w-full items-center py-[10%] overflow-hidden max-md:px-[5%] max-md:py-20"
        >
            <div className="flex flex-col w-[30%] ml-auto mr-[15%] gap-8 text-primary max-2xl:gap-5 max-md:w-full max-md:mr-0 max-md:items-end max-md:text-end">
                <motion.div
                    initial={{ x: 75, opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2 }}
                >
                    <SpanL className="flex-1 text-5xl max-2xl:text-4xl">
                        Home.IntroDetail.title
                    </SpanL>
                </motion.div>
                <motion.div
                    initial={{
                        x: 75,
                        opacity: 0,
                        filter: "blur(2px)",
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    transition={{ duration: 1.2 }}
                >
                    <SpanL className="max-md:text-end">
                        Home.IntroDetail.description
                    </SpanL>
                </motion.div>
                <motion.div
                    initial={{ x: 75, opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2 }}
                >
                    <LinkL
                        href={"/about#contact"}
                        className="bg-primary text-tertiary px-9 py-2 rounded-full hover:-translate-y-1 duration-500 max-2xl:px-7"
                    >
                        Common.contactUs
                    </LinkL>
                </motion.div>
            </div>
            <Image
                src={ToiletRollInteraction}
                alt={"uben-logo"}
                fill
                priority
                sizes="100%"
                className="object-cover -z-10"
            />
        </section>
    );
}

export default IntroDetail;
