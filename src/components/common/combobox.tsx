"use client";

import React, { Dispatch } from "react";
import SpanL from "./spanL";
import { MdArrowDropDown } from "react-icons/md";
import { useLocale, useTranslations } from "next-intl";
import { LocaleModel } from "@/models/LocaleModel";
import { LocaleTypes } from "@/i18n/routing";

interface ComboboxProps {
  name?: string;
  label: string;
  options: { key: string; label: LocaleModel | string }[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  setSelected?: Dispatch<React.SetStateAction<string>>;
  className?: string;
  dark?: boolean;
  noTranslation?: boolean;
  noEmptySelection?: boolean;
}

function Combobox({
  name,
  label,
  options,
  value,
  defaultValue,
  onValueChange,
  setSelected,
  className,
  dark = false,
  noEmptySelection = false,
}: ComboboxProps) {
  const t = useTranslations();
  const locale = useLocale() as LocaleTypes;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    onValueChange?.(newValue);
    setSelected?.(newValue);
  };

  return (
    <div
      className={`relative flex flex-col gap-1 w-full ${
        dark ? "text-text" : "text-primary"
      }`}
    >
      <SpanL className="ml-1">{label}</SpanL>
      <select
        value={value}
        name={name}
        className={`appearance-none rounded-xl py-2 pr-10 ${
          dark
            ? "bg-trim px-5 shadow-[0_3px_5px_-5px] shadow-text"
            : "border border-primary/30 px-4"
        } ${className}`}
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {!noEmptySelection && (
          <option value="">{t("About.Contact.topicPlaceholder")}</option>
        )}
        {options.map((option) => (
          <option key={option.key} value={option.key}>
            {typeof option.label === "string"
              ? t(option.label)
              : option.label.displayText(locale)}
          </option>
        ))}
      </select>
      <MdArrowDropDown
        size={30}
        className={`absolute right-3 pointer-events-none ${
          dark ? "bottom-1" : "bottom-1.5"
        }`}
      />
    </div>
  );
}

export default Combobox;
