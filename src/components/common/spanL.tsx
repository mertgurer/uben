"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LocaleSpanProps } from "@/interfaces/LocaleComponentProps";

function SpanL({ children, className }: LocaleSpanProps) {
    const t = useTranslations();

    return <span className={`text-balance ${className}`}>{t(children)}</span>;
}

export default SpanL;
