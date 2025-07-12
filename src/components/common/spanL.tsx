"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LocaleSpanProps } from "@/interfaces/LocaleComponentProps";
import { motion } from "motion/react";

function SpanL({ key, children, className }: LocaleSpanProps) {
    const t = useTranslations();

    return (
        <span key={key} className={`text-balance ${className}`}>
            {t(children)}
        </span>
    );
}

export default motion(SpanL);
