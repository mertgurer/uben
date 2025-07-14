"use client";
import React, { useEffect } from "react";
import { useLenis } from "lenis/react";
import SpanL from "@/components/common/spanL";
import Input from "@/components/common/input";
import Combobox from "@/components/common/combobox";
import CheckboxQuestionnaire from "@/components/common/checkboxQuestionnaire";
import ButtonL from "@/components/common/buttonL";
import { ChevronRight, Mail, Phone } from "lucide-react";
import ContactInformation from "@/data/contact.json";
import { ContactHelpers } from "@/helpers/helpers";
import toast from "react-hot-toast";

function Contact() {
    const lenis = useLenis();

    useEffect(() => {
        const hash = window.location.hash;

        if (hash === "#contact") {
            const element = document.getElementById("contact");

            if (!element) return;

            lenis?.scrollTo(element, {
                offset: -88,
                duration: 1,
                easing: (x) => 1 - Math.pow(1 - x, 3),
            });
        }
    }, [lenis]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data: Record<string, FormDataEntryValue | null> = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value === "" ? null : value;
        }

        if (data["needs"] === undefined) data.needs = null;

        console.log("Form values:", data);
    };

    return (
        <section
            id="contact"
            className="flex px-[15%] py-20 text-primary max-2xl:px-[10%] max-md:px-[5%] max-md:py-8 max-md:flex-col"
        >
            <div className="flex-1 flex flex-col gap-4">
                <span className="font-bold">UBEN</span>
                <SpanL className="text-5xl max-2xl:text-4xl">
                    Common.contactUs
                </SpanL>
                <SpanL>About.Contact.description</SpanL>
                <form
                    action=""
                    className="flex flex-col mt-7 gap-8 max-2xl:gap-6"
                    onSubmit={handleSubmit}
                >
                    <div className="flex gap-5 max-md:flex-col">
                        <Input
                            name="name"
                            label="About.Contact.name"
                            required
                        />
                        <Input
                            name="lastName"
                            label="About.Contact.lastName"
                            required
                        />
                    </div>
                    <div className="flex gap-5 max-md:flex-col">
                        <Input
                            name="email"
                            label="About.Contact.email"
                            required
                        />
                        <Input name="phone" label="About.Contact.phoneNumber" />
                    </div>
                    <Combobox
                        name="topic"
                        label="About.Contact.topic"
                        options={Array.from(
                            { length: 5 },
                            (_, i) =>
                                "About.Contact.topicOptions.option-" + (i + 1)
                        )}
                    />
                    <CheckboxQuestionnaire
                        name="needs"
                        label="About.Contact.needsQuestion"
                        options={Array.from(
                            { length: 6 },
                            (_, i) =>
                                "About.Contact.needsOptions.option-" + (i + 1)
                        )}
                        className="mt-2"
                    />
                    <Input
                        name="message"
                        label="About.Contact.message"
                        placeholder="About.Contact.messagePlaceholder"
                        required
                        textArea
                    />
                    <ButtonL
                        type="submit"
                        className="bg-primary text-tertiary px-9 py-2 rounded-full hover:-translate-y-1 duration-500 max-2xl:px-7 max-md:self-center max-md:px-12 max-md:py-2.5"
                    >
                        About.Contact.submit
                    </ButtonL>
                </form>
            </div>
            <div className="flex-1 flex items-center justify-center mb-auto mt-[12%] max-md:mt-20">
                <div className="grid grid-cols-2 gap-x-10 gap-y-14 w-full pl-[18%] pr-[2%] max-md:flex max-md:flex-wrap max-md:p-0 max-md:gap-0 max-md:items-start">
                    <div className="flex flex-col justify-center max-md:items-center max-md:w-1/2">
                        <Mail size={28} strokeWidth={1.5} className="ml-1" />
                        <SpanL className="text-lg font-medium mt-2 mb-2">
                            About.Contact.email
                        </SpanL>
                        <SpanL className="max-md:text-center max-md:text-sm">
                            About.Contact.emailInfo
                        </SpanL>
                        <button
                            onClick={() => {
                                try {
                                    ContactHelpers.copyToClipboard(
                                        ContactInformation.mail
                                    );
                                    ContactHelpers.openMail(
                                        ContactInformation.mail
                                    );
                                } catch {}
                            }}
                            className="underline mt-2 text-start"
                        >
                            {ContactInformation.mail}
                        </button>
                    </div>
                    <div className="flex flex-col justify-center max-md:items-center max-md:w-1/2">
                        <Phone size={28} strokeWidth={1.5} className="ml-1" />
                        <SpanL className="text-lg font-medium mt-2 mb-2">
                            About.Contact.phone
                        </SpanL>
                        <SpanL className="max-md:text-center max-md:text-sm">
                            About.Contact.phoneInfo
                        </SpanL>
                        <button
                            onClick={() => {
                                try {
                                    ContactHelpers.copyToClipboard(
                                        ContactInformation.phone
                                    );
                                    toast.success("Text copied to clipboard");
                                } catch {
                                    toast.error("Failed to copy text");
                                }
                            }}
                            className="underline mt-2 text-start"
                        >
                            {ContactInformation.phone}
                        </button>
                    </div>
                    <div className="flex flex-col justify-center max-md:items-center max-md:mt-10">
                        <Mail size={28} strokeWidth={1.5} className="ml-1" />
                        <SpanL className="text-lg font-medium mt-2 mb-2">
                            About.Contact.office
                        </SpanL>
                        <span className="max-md:text-center">
                            {ContactInformation.address.address}
                        </span>
                        <ButtonL
                            onClick={() => {
                                window.open(
                                    ContactInformation.address.map,
                                    "_blank"
                                );
                            }}
                            className="group font-medium py-2 hover:translate-x-1 duration-500 text-start mt-2"
                            afterElement={
                                <ChevronRight
                                    size={20}
                                    strokeWidth={1.5}
                                    className="group-hover:translate-x-4 duration-500"
                                />
                            }
                        >
                            About.Contact.getDirections
                        </ButtonL>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
