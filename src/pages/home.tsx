"use client";

import BurgerMenu from "@/components/navbar/burgerMenu";
import LocaleButton from "@/components/common/localeButton";
import ThemeButton from "@/components/common/themeButton";
import Image from "next/image";
import SpanL from "@/components/common/spanL";
import ButtonL from "@/components/common/buttonL";

function Home() {
    return (
        <main className="flex flex-col min-h-screen items-center justify-center gap-3">
            <div className="flex flex-col items-end gap-2 absolute right-[5%] top-[10%] font-[300]">
                <ThemeButton />
                <LocaleButton />
            </div>
            <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/icons/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
            <SpanL className="font-medium mb-4">Common.welcome</SpanL>
            <BurgerMenu />
            <ButtonL onClick={() => console.log("clicked")}>
                Common.welcome
            </ButtonL>
        </main>
    );
}

export default Home;
