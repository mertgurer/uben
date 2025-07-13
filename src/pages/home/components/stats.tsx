"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import PaperTowelInteraction from "../../../../public/images/paper-towel-interaction.png";
import SpanL from "@/components/common/spanL";
import LinkL from "@/components/common/linkL";
import { ChevronRight, Dot } from "lucide-react";
import { motion } from "motion/react";
import { useMobile } from "@/hooks/useMobile";

function Stats() {
    const [parallaxScroll, setParallaxScroll] = React.useState(0);
    const ticking = useRef(false);
    const isMobile = useMobile();

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const section = document.getElementById("stats");
                    if (!section) return;

                    const sectionRect = section.getBoundingClientRect();
                    const sectionHeight = sectionRect.height;
                    const windowHeight = window.innerHeight;
                    const sectionStartPoint = sectionRect.top;
                    const bufferDistance = (windowHeight - sectionHeight) / 2;

                    const rawParallax =
                        sectionStartPoint -
                        bufferDistance -
                        (!isMobile ? 44 : 36);

                    setParallaxScroll(rawParallax / 10);
                    ticking.current = false;
                });

                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    return (
        <section
            id="stats"
            className="relative flex w-full items-center justify-center overflow-hidden"
        >
            <div className="flex flex-col px-[15%] py-[140px] gap-[100px] bg-text/60 text-tertiary max-2xl:px-[10%] max-md:py-20 max-md:gap-8">
                <div className="flex gap-[15%] max-2xl:gap-[10%] max-md:flex-col max-md:gap-4">
                    <div className="flex-1 flex flex-col">
                        <div className="flex items-center -ml-6">
                            <Dot size={28} strokeWidth={1.75} />
                            <SpanL>Home.Stats.tagline</SpanL>
                        </div>
                        <SpanL className="text-5xl mt-1 max-2xl:text-4xl">
                            Home.Stats.title
                        </SpanL>
                    </div>
                    <div className="flex-1 flex flex-col mt-7 gap-8 max-2xl:gap-5 max-md:gap-3 max-md:mt-0">
                        <SpanL>Home.Stats.description</SpanL>
                        <LinkL
                            href={"/"}
                            className="group py-2 hover:translate-x-1 duration-500"
                            afterElement={
                                <ChevronRight
                                    size={20}
                                    strokeWidth={1.5}
                                    className="group-hover:translate-x-4 duration-500"
                                />
                            }
                        >
                            Home.Stats.detail
                        </LinkL>
                    </div>
                </div>
                <div className="flex gap-10 max-md:flex-col">
                    <div className="flex-1 flex flex-col border-l border-tertiary px-6 py-2 gap-2 overflow-hidden">
                        <motion.div
                            initial={{ x: `calc(-100% - ${24}px)` }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1.3, delay: 0.25 }}
                            className="text-6xl font-semibold w-max max-2xl:text-5xl"
                        >
                            260+&nbsp;
                            <SpanL>Common.ton</SpanL>
                        </motion.div>
                        <SpanL className="font-light">
                            Home.Stats.yearlyProduction
                        </SpanL>
                    </div>
                    <div className="flex-1 flex flex-col border-l border-tertiary px-6 py-2 gap-2 overflow-hidden">
                        <motion.span
                            initial={{ x: `calc(-100% - ${24}px)` }}
                            whileInView={{ x: 0 }}
                            transition={{ duration: 1.1, delay: 0.65 }}
                            className="text-6xl font-semibold w-max max-2xl:text-5xl"
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
                            className="text-6xl font-semibold w-max max-2xl:text-5xl"
                        >
                            30%
                        </motion.span>
                        <SpanL className="font-light">
                            Home.Stats.sustainabilityGrowth
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
                className="object-cover -z-10 scale-[125%]"
                style={{
                    transform: `translateY(${parallaxScroll}px)`,
                    transition: "transform 0.1s linear",
                }}
            />
        </section>
    );
}

export default Stats;
