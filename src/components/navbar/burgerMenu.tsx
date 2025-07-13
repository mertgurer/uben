"use client";

import React from "react";

interface Props {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function BurgerMenu({ menu, setMenu }: Props) {
    return (
        <button
            onClick={() => setMenu(!menu)}
            className="flex flex-col gap-1 p-2 z-40 md:hidden"
        >
            <div
                className={`w-6 h-1 duration-500 ease-in-out bg-tertiary ${
                    menu
                        ? "rotate-[45deg] -translate-x-[18%] translate-y-[100%] scale-x-50"
                        : ""
                }`}
            ></div>
            <div
                className={`w-6 h-1 duration-500 ease-in-out bg-tertiary ${
                    menu ? "-rotate-45" : ""
                }`}
            ></div>
            <div
                className={`w-6 h-1 duration-500 ease-in-out bg-tertiary ${
                    menu
                        ? "rotate-45 translate-x-[18%] -translate-y-[90%] scale-x-50"
                        : ""
                }`}
            ></div>
        </button>
    );
}
