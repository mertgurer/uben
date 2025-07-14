import React from "react";
import SpanL from "./spanL";

interface CheckboxQuestionnaireProps {
    name: string;
    label: string;
    options: string[];
    className?: string;
}

function CheckboxQuestionnaire({
    name,
    label,
    options,
    className,
}: CheckboxQuestionnaireProps) {
    return (
        <div className={`flex flex-col w-full gap-2 ${className}`}>
            <SpanL>{label}</SpanL>
            <div className="flex flex-wrap gap-[4%]">
                {options.map((option) => (
                    <div key={option} className="w-[48%] mb-1">
                        <label className="flex items-center gap-2 p-1 cursor-pointer">
                            <input
                                type="radio"
                                name={name}
                                value={option}
                                className="appearance-none h-4 aspect-square border border-primary/30 rounded-full checked:bg-primary checked:border-primary transition-colors duration-200"
                            />
                            <SpanL>{option}</SpanL>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CheckboxQuestionnaire;
