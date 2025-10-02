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
  disabled = false,
  type = "button",
}: LocaleButtonProps) {
  const t = useTranslations();

  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...style }}
      disabled={disabled}
      className={`flex items-center gap-2 text-balance w-max ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {beforeElement}
      {t(children)}
      {afterElement}
    </button>
  );
}

export default ButtonL;
