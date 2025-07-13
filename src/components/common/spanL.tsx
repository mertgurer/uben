"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LocaleSpanProps } from "@/interfaces/LocaleComponentProps";

function SpanL({ children, className, style }: LocaleSpanProps) {
    const t = useTranslations();

    return (
        <span style={{ ...style }} className={`text-balance ${className}`}>
            {t(children)}
        </span>
    );
}

export default SpanL;
