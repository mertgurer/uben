"use client";

import React, { useState } from "react";
import Image from "next/image";
import Factory from "../../../public/images/uben-factory.png";
import { ArrowDownToDot } from "lucide-react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

function Welcome() {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(0);

    const lenis = useLenis((lenis) => {
        setProgress(-lenis.animatedScroll / 3);
        setIsVisible(lenis.animatedScroll < window.innerHeight / 2);
    });

    const handleScrollTop = () => {
        const element = document.getElementById("intro");

        if (!element) return;

        lenis?.scrollTo(element, {
            offset: -88,
            duration: 1,
            easing: (x) => 1 - Math.pow(1 - x, 3),
        });
    };

    return (
        <section id="welcome" className="flex justify-center">
            <div className="relative h-screen w-full max-md:aspect-video max-md:h-auto">
                <Image
                    src={Factory}
                    alt={"uben-factory"}
                    fill
                    priority
                    sizes="100%"
                    className="object-cover"
                />
            </div>
            <motion.div
                initial={{ opacity: 0, y: -150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                className="absolute bottom-12 z-20 h-14 aspect-square max-2xl:h-12 max-md:hidden"
            >
                <motion.button
                    animate={{ opacity: isVisible ? 1 : 0, y: progress }}
                    transition={{ duration: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleScrollTop()}
                    disabled={!isVisible}
                    className={`flex items-center justify-center w-full h-full border-2 rounded-full 
                    bg-primary/60 border-tertiary shadow-[0_0_20px_-5px] shadow-text backdrop-blur-md
                    ${isVisible ? "cursor-pointer" : "cursor-default"}`}
                >
                    <ArrowDownToDot
                        size={28}
                        strokeWidth={2}
                        className="text-tertiary max-2xl:scale-90"
                    />
                </motion.button>
            </motion.div>
        </section>
    );
}

export default Welcome;
