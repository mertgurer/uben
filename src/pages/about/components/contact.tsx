"use client";
import React, { useEffect } from "react";
import { useLenis } from "lenis/react";
import SpanL from "@/components/common/spanL";
import Input from "@/components/common/input";

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

    return (
        <section id="contact" className="flex px-[15%] py-20 text-primary">
            <div className="flex-1 flex flex-col gap-4">
                <span className="font-bold">UBEN</span>
                <SpanL className="text-5xl max-2xl:text-4xl">
                    Common.contactUs
                </SpanL>
                <SpanL>About.Contact.description</SpanL>
                <form action="" className="flex flex-col mt-7 gap-6">
                    <div className="flex gap-5">
                        <Input name="name" label="About.Contact.name" />
                        <Input name="lastName" label="About.Contact.lastName" />
                    </div>
                    <div className="flex gap-5">
                        <Input name="email" label="About.Contact.email" />
                        <Input name="phone" label="About.Contact.phone" />
                    </div>
                </form>
            </div>
            <div className="flex-1"></div>
        </section>
    );
}

export default Contact;
