"use client";

import React from "react";
import SpanL from "./spanL";
import { useTranslations } from "next-intl";

interface InputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  textArea?: boolean;
  password?: boolean;
  className?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  onBlur?: boolean;
}

function Input({
  name,
  label,
  placeholder,
  defaultValue,
  required,
  textArea,
  password,
  className,
  value,
  onValueChange,
  onBlur,
}: InputProps) {
  const t = useTranslations();
  const translatedPlaceholder = placeholder ? t(placeholder) : "";

  const commonProps = {
    name,
    placeholder: translatedPlaceholder,
    required,
    className: `border border-primary/30 rounded-xl px-4 py-2 ${
      className || ""
    }`,
    value,
    defaultValue,
    onChange:
      onValueChange && !onBlur
        ? (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            onValueChange(e.target.value)
        : undefined,
    onBlur:
      onValueChange && onBlur
        ? (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            onValueChange(e.target.value)
        : undefined,
  };

  return (
    <div className="flex flex-col gap-1 w-full text-primary">
      {label && (
        <div className="flex gap-1 ml-1">
          <SpanL>{label}</SpanL> {required && "*"}
        </div>
      )}

      {textArea ? (
        <textarea
          {...commonProps}
          className={`${commonProps.className} min-h-44 max-md:min-h-32`}
        />
      ) : (
        <input {...commonProps} type={password ? "password" : "text"} />
      )}
    </div>
  );
}
export default Input;
