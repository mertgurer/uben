"use client";

import React from "react";
import SpanL from "./spanL";
import Image from "next/image";
import Logo from "../../../public/images/uben-logo.png";
import Navigation from "@/data/navigation.json";
import LinkL from "./linkL";
import { ContactHelpers } from "@/helpers/helpers";
import Contact from "@/data/contact.json";
import toast from "react-hot-toast";
import LocaleButton from "./localeButton";
import { Link } from "@/i18n/navigation";
import ContactData from "@/data/contact.json";
import { Instagram, Linkedin } from "lucide-react";

function Footer() {
    return (
        <div className="flex flex-col w-full pb-10 pt-20 px-40 gap-16 bg-primary text-tertiary max-2xl:pt-16 max-2xl:gap-5 max-md:px-8 max-md:pt-12">
            <div className="flex justify-between">
                <div className="flex-1 flex gap-[15%] max-md:gap-8">
                    <div className="flex-1 flex flex-col gap-2 max-md:flex-2">
                        <SpanL className="text-xl font-medium mb-1 max-2xl:text-lg">
                            Common.contact
                        </SpanL>
                        <button
                            onClick={() => {
                                try {
                                    ContactHelpers.copyToClipboard(
                                        Contact.phone
                                    );
                                    toast.success("Text copied to clipboard");
                                } catch {
                                    toast.error("Failed to copy text");
                                }
                            }}
                            className="font-light w-max group relative"
                        >
                            {Contact.phone}
                            <span className="absolute left-0 top-full h-px w-0 bg-tertiary transition-all duration-300 group-hover:w-full" />
                        </button>
                        <button
                            onClick={() => {
                                try {
                                    ContactHelpers.copyToClipboard(
                                        Contact.mail
                                    );
                                    ContactHelpers.openMail(Contact.mail);
                                } catch {}
                            }}
                            className="font-light w-max group relative"
                        >
                            {Contact.mail}
                            <span className="absolute left-0 top-full h-px w-0 bg-tertiary transition-all duration-300 group-hover:w-full" />
                        </button>
                        <button
                            onClick={() => {
                                window.open(Contact.address.map, "_blank");
                            }}
                            className="font-light group relative text-start"
                        >
                            {Contact.address.address}
                            <span className="absolute left-0 top-full h-px w-0 bg-tertiary transition-all duration-300 group-hover:w-full" />
                        </button>
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <SpanL className="text-xl font-medium mb-1 max-2xl:text-lg">
                            Common.pages
                        </SpanL>
                        {Navigation.map((navigation) => (
                            <LinkL
                                key={navigation.name}
                                href={navigation.href}
                                className="font-light group relative"
                                afterElement={
                                    <span className="absolute left-0 top-full h-px w-0 bg-tertiary transition-all duration-300 group-hover:w-full" />
                                }
                            >
                                {navigation.name}
                            </LinkL>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-start items-end max-md:hidden">
                    <Link
                        href="/"
                        className="relative w-1/4 aspect-[2.3] max-2xl:w-1/3"
                    >
                        <Image
                            src={Logo}
                            alt={"uben-logo"}
                            fill
                            priority
                            sizes="100%"
                            className="object-contain"
                        />
                    </Link>
                    <div className="flex items-center justify-center mt-5 gap-2">
                        <Link
                            href={ContactData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1"
                        >
                            <Linkedin size={28} strokeWidth={1.75} />
                        </Link>
                        <Link
                            href={ContactData.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1"
                        >
                            <Instagram size={28} strokeWidth={1.75} />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center text-xs max-md:flex-col max-md:text-center max-md:gap-4">
                <div className="flex flex-col items-center gap-6 md:hidden">
                    <div className="flex items-center justify-center mt-5 gap-2">
                        <Link
                            href={ContactData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1"
                        >
                            <Linkedin size={28} strokeWidth={1.75} />
                        </Link>
                        <Link
                            href={ContactData.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1"
                        >
                            <Instagram size={28} strokeWidth={1.75} />
                        </Link>
                    </div>
                    <LocaleButton />
                </div>
                <SpanL>Footer.copyright</SpanL>
                <div className="max-md:hidden">
                    <LocaleButton />
                </div>
                <div className="flex gap-3 max-md:mb-10">
                    <LinkL href={"/"} className="opacity-70 underline">
                        Footer.terms
                    </LinkL>
                    <LinkL href={"/"} className="opacity-70 underline">
                        Footer.privacy
                    </LinkL>
                </div>
            </div>
        </div>
    );
}

export default Footer;
