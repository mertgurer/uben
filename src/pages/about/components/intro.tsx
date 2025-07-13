import SpanL from "@/components/common/spanL";
import React from "react";
import Image from "next/image";
import PaperDispenserInteraction from "../../../../public/images/paper-dispenser-interaction.png";

function Intro() {
    return (
        <section
            id="intro"
            className="relative flex flex-col px-[15%] py-32 gap-4 bg-primary/20"
        >
            <Image
                src={PaperDispenserInteraction}
                alt={"paper-dispenser-interaction"}
                fill
                priority
                sizes="100%"
                className="object-cover opacity-30 -z-10"
            />
            <SpanL className="text-6xl font-extrabold text-primary">
                About.Intro.title
            </SpanL>
            <SpanL className="w-1/3 text-primary">
                About.Intro.description
            </SpanL>
        </section>
    );
}

export default Intro;
