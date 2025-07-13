"use client";

import React from "react";
import { motion } from "motion/react";
import SpanL from "@/components/common/spanL";
import LinkL from "@/components/common/linkL";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import FactoryInside from "../../../../public/images/factory-inside.png";

function IntroDetail() {
    return (
        <section id="introDetail" className="flex px-[15%] py-20 gap-[10%]">
            <div className="flex-1 flex flex-col py-20 gap-8 text-primary">
                <span className="font-bold -mb-4">UBEN</span>
                <motion.div
                    initial={{ x: 75, opacity: 0, filter: "blur(2px)" }}
                    whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    <SpanL className="flex-1 text-5xl max-2xl:text-4xl">
                        About.IntroDetail.title
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
                    transition={{ duration: 1.2, delay: 0.4 }}
                >
                    <SpanL className="max-md:text-end">
                        About.IntroDetail.description
                    </SpanL>
                </motion.div>
                <div className="flex gap-12 max-2xl:gap-10">
                    <LinkL
                        href={"/about#contact"}
                        className="bg-primary text-tertiary px-9 py-2 rounded-full hover:-translate-y-1 duration-500 max-2xl:px-7"
                    >
                        Common.contactUs
                    </LinkL>
                    <LinkL
                        href={"/products"}
                        className="group font-medium p-2 hover:translate-x-1 duration-500"
                        afterElement={
                            <ChevronRight
                                size={20}
                                strokeWidth={1.5}
                                className="group-hover:translate-x-4 duration-500"
                            />
                        }
                    >
                        Home.Intro.explore
                    </LinkL>
                </div>
            </div>
            <div className="flex-1 flex justify-center">
                <div className="relative w-3/4 h-full rounded-sm overflow-hidden ">
                    <Image
                        src={FactoryInside}
                        alt={"uben-factory-inside"}
                        fill
                        priority
                        sizes="100%"
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}

export default IntroDetail;
