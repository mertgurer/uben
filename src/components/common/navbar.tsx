"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/images/uben-logo.png";
import Navigation from "@/data/navigation.json";
import LinkL from "./linkL";
import { useLenis } from "lenis/react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useLenis((lenis) => {
        setScrolled(lenis.animatedScroll < 200);
    });

    return (
        <div
            className={`fixed w-full top-0 flex z-30 justify-between items-center-safe bg-primary text-tertiary px-[13%] h-[88px] ${
                scrolled ? "bg-primary/40" : "bg-primary"
            } duration-700`}
        >
            <Link href="/" className="relative h-2/3 aspect-[2]">
                <Image
                    src={Logo}
                    alt={"uben-logo"}
                    fill
                    priority
                    sizes="100%"
                    className="object-contain"
                />
            </Link>
            <div className="flex items-center gap-10 font-semibold">
                {Navigation.map((navigation) => (
                    <LinkL
                        key={navigation.name}
                        href={navigation.href}
                        className=""
                    >
                        {navigation.name}
                    </LinkL>
                ))}
                <LinkL
                    href="/contact"
                    className="bg-tertiary text-primary px-8 py-1.5 rounded-full font-bold text-lg"
                >
                    Common.contact
                </LinkL>
            </div>
        </div>
    );
}

export default Navbar;
