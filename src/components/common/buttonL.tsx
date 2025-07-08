"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LocaleButtonProps } from "@/interfaces/LocaleComponentProps";

function ButtonL({ key, children, className, onClick }: LocaleButtonProps) {
    const t = useTranslations();

    return (
        <button key={key} className={className} onClick={onClick}>
            {t(children)}
        </button>
    );
}

export default ButtonL;
