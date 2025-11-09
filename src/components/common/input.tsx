"use client";

import React from "react";
import SpanL from "./spanL";
import { useTranslations } from "next-intl";

interface InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  textArea?: boolean;
  password?: boolean;
  className?: string;
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
}: InputProps) {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-1 w-full text-primary">
      {label && (
        <div className="flex gap-1 ml-1">
          <SpanL>{label}</SpanL> {required && "*"}
        </div>
      )}
      {textArea ? (
        <textarea
          name={name}
          placeholder={placeholder ? t(placeholder) : ""}
          defaultValue={defaultValue}
          className={`border border-primary/30 rounded-xl px-4 py-2 min-h-44 max-md:min-h-32 ${className}`}
        />
      ) : (
        <input
          name={name}
          type={password ? "password" : "text"}
          placeholder={placeholder ? t(placeholder) : ""}
          defaultValue={defaultValue}
          className={`border border-primary/30 rounded-xl px-4 py-2 ${className}`}
        />
      )}
    </div>
  );
}

export default Input;
