"use client";

import React from "react";
import SpanL from "./spanL";
import { MdArrowDropDown } from "react-icons/md";
import { useTranslations } from "next-intl";

interface ComboboxProps {
    name: string;
    label: string;
    options: string[];
}

function Combobox({ name, label, options }: ComboboxProps) {
    const t = useTranslations();
    return (
        <div className="relative flex flex-col gap-1 w-full text-primary">
            <SpanL className="ml-1">{label}</SpanL>
            <select
                name={name}
                className="appearance-none border border-primary/30 rounded-xl px-4 py-2 pr-10"
            >
                <option value="">{t("About.Contact.topicPlaceholder")}</option>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {t(option)}
                    </option>
                ))}
            </select>
            <MdArrowDropDown
                size={30}
                className="absolute right-3 pointer-events-none bottom-1.5"
            />
        </div>
    );
}

export default Combobox;
