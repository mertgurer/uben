"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/images/uben-logo.png";
import Navigation from "@/data/navigation.json";
import { useLenis } from "lenis/react";
import BurgerMenu from "../navbar/burgerMenu";
import { usePathname } from "next/navigation";
import ButtonL from "./buttonL";
import { Link, useRouter } from "@/i18n/navigation";

function Navbar() {
    const router = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [menu, setMenu] = useState(false);
    const pathname = usePathname();

    useLenis((lenis) => {
        setScrolled(lenis.animatedScroll < 20);
    });

    return (
        <div
            className={`${
                pathname === "/" ? "fixed max-md:sticky" : "sticky"
            } w-full top-0 flex z-30 justify-between items-center text-tertiary px-[13%] h-[88px] max-md:h-[72px] max-md:px-6 ${
                pathname === "/" && scrolled ? "bg-primary/40" : "bg-primary"
            } duration-700 max-md:bg-primary`}
        >
            <Link
                href="/"
                className="relative mt-1 h-[60%] aspect-[2.3] max-2xl:h-1/2 max-md:h-[55%]"
            >
                <Image
                    src={Logo}
                    alt={"uben-logo"}
                    fill
                    priority
                    sizes="100%"
                    className="object-contain"
                />
            </Link>
            <div
                className={`flex items-center gap-10 font-semibold 
                    max-md:fixed max-md:top-0 max-md:left-0 max-md:flex-col max-md:py-[20%] max-md:gap-5 max-md:w-full max-md:bg-primary/80 max-md:backdrop-blur-md ${
                        menu
                            ? "max-md:translate-y-0"
                            : "max-md:-translate-y-full"
                    } duration-500`}
            >
                {Navigation.map((navigation) => (
                    <ButtonL
                        key={navigation.name}
                        afterElement={
                            <span className="absolute left-0 top-full -mt-1 h-px w-0 bg-tertiary transition-all duration-300 group-hover:w-full" />
                        }
                        onClick={() => {
                            setMenu(false);
                            router.push(navigation.href);
                        }}
                        className="group relative py-1 max-2xl:text-sm max-md:p-2 max-md:text-2xl"
                    >
                        {navigation.name}
                    </ButtonL>
                ))}
                <ButtonL
                    onClick={() => {
                        setMenu(false);
                        router.push("/about#contact");
                    }}
                    className="bg-tertiary text-primary px-8 py-1.5 rounded-full font-bold text-lg hover:scale-[97%] duration-500 max-2xl:text-base max-2xl:px-6 max-md:px-8 max-md:p-2 max-md:mt-2 max-md:text-2xl"
                >
                    Common.contactUs
                </ButtonL>
            </div>
            <BurgerMenu menu={menu} setMenu={setMenu} />
        </div>
    );
}

export default Navbar;
