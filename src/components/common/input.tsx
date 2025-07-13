"use client";

import React from "react";
import SpanL from "./spanL";

interface InputProps {
    name: string;
    label: string;
    placeholder?: string;
}

function Input({ name, label, placeholder }: InputProps) {
    return (
        <div className="flex flex-col gap-1 w-full text-primary">
            <SpanL className="ml-1">{label}</SpanL>
            <input
                name={name}
                type="text"
                placeholder={placeholder}
                className="border border-primary/50 rounded-xl px-4 py-2"
            />
        </div>
    );
}

export default Input;
