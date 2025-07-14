"use client";

import React from "react";
import SpanL from "./spanL";
import { useTranslations } from "next-intl";

interface InputProps {
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    textArea?: boolean;
}

function Input({ name, label, placeholder, required, textArea }: InputProps) {
    const t = useTranslations();

    return (
        <div className="flex flex-col gap-1 w-full text-primary">
            <div className="flex gap-1 ml-1">
                <SpanL>{label}</SpanL> {required && "*"}
            </div>
            {textArea ? (
                <textarea
                    name={name}
                    placeholder={placeholder ? t(placeholder) : ""}
                    className="border border-primary/30 rounded-xl px-4 py-2 min-h-44 max-md:min-h-32"
                />
            ) : (
                <input
                    name={name}
                    type="text"
                    placeholder={placeholder ? t(placeholder) : ""}
                    className="border border-primary/30 rounded-xl px-4 py-2"
                />
            )}
        </div>
    );
}

export default Input;
