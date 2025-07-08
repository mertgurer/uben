"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LocaleSpanProps } from "@/interfaces/LocaleComponentProps";

function SpanL({ key, children, className }: LocaleSpanProps) {
    const t = useTranslations();

    return (
        <span key={key} className={className}>
            {t(children)}
        </span>
    );
}

export default SpanL;
