"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LocaleSpanProps } from "@/interfaces/LocaleComponentProps";

function SpanL({ children, className, style }: LocaleSpanProps) {
    const t = useTranslations();

    return (
        <span style={{ ...style }} className={`text-balance ${className}`}>
            {t(children).includes(`\n`)
                ? t(children)
                      .split("\n")
                      .map((line, index, array) => (
                          <span key={index}>
                              {line}
                              {index < array.length - 1 && (
                                  <>
                                      <br />
                                      <br />
                                  </>
                              )}
                          </span>
                      ))
                : t(children)}
        </span>
    );
}

export default SpanL;
