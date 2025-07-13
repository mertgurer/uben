"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LocaleLinkProps } from "@/interfaces/LocaleComponentProps";
import Link from "next/link";

function LinkL({
    children,
    className,
    href,
    beforeElement,
    afterElement,
}: LocaleLinkProps) {
    const t = useTranslations();

    return (
        <Link
            href={href}
            className={`flex items-center gap-2 text-balance w-max ${className}`}
        >
            {beforeElement}
            {t(children)}
            {afterElement}
        </Link>
    );
}

export default LinkL;
