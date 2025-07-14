"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LocaleButtonProps } from "@/interfaces/LocaleComponentProps";

function ButtonL({
    children,
    style,
    className,
    onClick,
    beforeElement,
    afterElement,
    type = "button",
}: LocaleButtonProps) {
    const t = useTranslations();

    return (
        <button
            type={type}
            onClick={onClick}
            style={{ ...style }}
            className={`flex items-center gap-2 text-balance w-max ${className}`}
        >
            {beforeElement}
            {t(children)}
            {afterElement}
        </button>
    );
}

export default ButtonL;
