"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LocaleLinkProps } from "@/interfaces/LocaleComponentProps";
import Link from "next/link";
import { motion } from "motion/react";

function LinkL({
    key,
    children,
    className,
    href,
    beforeElement,
    afterElement,
}: LocaleLinkProps) {
    const t = useTranslations();

    return (
        <Link
            key={key}
            href={href}
            className={`flex items-center gap-2 text-balance w-max ${className}`}
        >
            {beforeElement}
            {t(children)}
            {afterElement}
        </Link>
    );
}

export default motion(LinkL);
