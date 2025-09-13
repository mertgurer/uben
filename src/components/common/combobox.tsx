"use client";

import React, { Dispatch } from "react";
import SpanL from "./spanL";
import { MdArrowDropDown } from "react-icons/md";
import { useTranslations } from "next-intl";

interface ComboboxProps {
    name: string;
    label: string;
    options: { key: string; label: string }[];
    setSelected: Dispatch<React.SetStateAction<string>>;
    dark?: boolean;
    noTranslation?: boolean;
    noEmptySelection?: boolean;
}

function Combobox({
    name,
    label,
    options,
    setSelected,
    dark = false,
    noEmptySelection = false,
}: ComboboxProps) {
    const t = useTranslations();

    console.log(options);

    return (
        <div
            className={`relative flex flex-col gap-1 w-full ${
                dark ? "text-text" : "text-primary"
            }`}
        >
            <SpanL className="ml-1">{label}</SpanL>
            <select
                name={name}
                className={`appearance-none rounded-xl py-2 pr-10 ${
                    dark
                        ? "bg-trim px-5 shadow-[0_3px_5px_-5px] shadow-text"
                        : "border border-primary/30 px-4"
                }`}
                onChange={(e) => setSelected(e.target.value)}
            >
                {!noEmptySelection && (
                    <option value="">
                        {t("About.Contact.topicPlaceholder")}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.key} value={option.key}>
                        {t(option.label)}
                    </option>
                ))}
            </select>
            <MdArrowDropDown
                size={30}
                className={`absolute right-3 pointer-events-none  ${
                    dark ? "bottom-1" : "bottom-1.5"
                }`}
            />
        </div>
    );
}

export default Combobox;
