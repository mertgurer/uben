"use client";

import React from "react";
import { LocaleLinkProps } from "@/interfaces/LocaleComponentProps";
import { Link } from "@/i18n/navigation";
import SpanL from "./spanL";

function LinkL({
  children,
  style,
  className,
  href,
  beforeElement,
  afterElement,
}: LocaleLinkProps) {
  return (
    <Link
      href={href}
      style={{ ...style }}
      className={`flex items-center gap-2 text-balance w-max ${className}`}
    >
      {beforeElement}
      <SpanL>{children}</SpanL>
      {afterElement}
    </Link>
  );
}

export default LinkL;
