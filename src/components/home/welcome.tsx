"use client";

import React, { useState } from "react";
import Image from "next/image";
import Factory from "../../../public/images/uben-factory.png";
import { ArrowDownToDot } from "lucide-react";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

const defaultStaggerAmount = 30;

function Welcome() {
    const [isVisible, setIsVisible] = useState(true);
    const [progress, setProgress] = useState(defaultStaggerAmount);

    const lenis = useLenis((lenis) => {
        setProgress(-lenis.animatedScroll / 3 + defaultStaggerAmount);
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
            <div className="relative h-screen w-full">
                <Image
                    src={Factory}
                    alt={"uben-factory"}
                    fill
                    priority
                    sizes="100%"
                    className="object-cover"
                />
            </div>
            <motion.button
                initial={{ y: 0 }}
                animate={{ opacity: isVisible ? 1 : 0, y: progress }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScrollTop()}
                disabled={!isVisible}
                className={`absolute flex items-center justify-center 
                        bottom-16 z-20 h-14 border-2 aspect-square rounded-full 
                        bg-primary/60 border-tertiary shadow-[0_0_20px_-5px] shadow-text
                ${isVisible ? "cursor-pointer" : "cursor-default"}`}
            >
                <ArrowDownToDot
                    size={28}
                    strokeWidth={2}
                    className="text-tertiary"
                />
            </motion.button>
        </section>
    );
}

export default Welcome;
