"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { LocaleSpanProps } from "@/interfaces/LocaleComponentProps";
import { LocaleTypes } from "@/i18n/routing";

function SpanL({ children, className, style }: LocaleSpanProps) {
  const t = useTranslations();
  const locale = useLocale() as LocaleTypes;

  let text: string;

  if (typeof children === "object" && children !== null) {
    text = children.displayText(locale);
  } else {
    try {
      text = t(children);
    } catch {
      text = children;
    }
  }

  const lines = text.split("\n");

  return (
    <span style={style} className={`text-balance ${className}`}>
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && (
            <>
              <br />
              <br />
            </>
          )}
        </span>
      ))}
    </span>
  );
}

export default SpanL;
