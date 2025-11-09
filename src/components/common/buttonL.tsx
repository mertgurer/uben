"use client";

import React from "react";
import { LocaleButtonProps } from "@/interfaces/LocaleComponentProps";
import SpanL from "./spanL";

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
  return (
    <button
      type={type}
      onClick={onClick}
      style={{ ...style }}
      disabled={disabled}
      className={`flex items-center gap-2 text-balance w-max ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {beforeElement}
      <SpanL>{children}</SpanL>

      {afterElement}
    </button>
  );
}

export default ButtonL;
