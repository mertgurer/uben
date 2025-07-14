"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import React from "react";
import Image from "next/image";

import EN from "../../../public/images/countries/en.png";
import TR from "../../../public/images/countries/tr.png";
import ES from "../../../public/images/countries/es.png";

export default function LocaleButton() {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="flex gap-3 max-2xl:gap-2">
            {routing.locales.map((x) => {
                const localeValue =
                    x === "en" ? EN : x === "tr" ? TR : x === "es" ? ES : null;

                if (!localeValue) return;

                return (
                    <button
                        key={x}
                        onClick={() => router.replace(pathname, { locale: x })}
                        className="relative w-12 aspect-[1.5] max-2xl:w-10 "
                    >
                        <Image
                            src={localeValue}
                            alt={"locale-logo"}
                            fill
                            priority
                            sizes="100%"
                            className="object-contain"
                        />
                    </button>
                );
            })}
        </div>
    );
}
