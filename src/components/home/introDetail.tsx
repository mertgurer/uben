import React from "react";
import Image from "next/image";
import ToiletRollInteraction from "../../../public/images/toilet-roll-interaction.png";
import SpanL from "../common/spanL";
import LinkL from "../common/linkL";

function IntroDetail() {
    return (
        <section
            id="introDetail"
            className="relative flex w-full items-center py-[10%]"
        >
            <div className="flex flex-col w-[30%] ml-auto mr-[15%] gap-8 text-primary">
                <SpanL className="flex-1 text-5xl">IntroDetail.title</SpanL>
                <SpanL>IntroDetail.description</SpanL>
                <LinkL
                    href={"/"}
                    className="bg-primary text-tertiary px-9 py-2 rounded-full"
                >
                    Common.contact
                </LinkL>
            </div>
            <Image
                src={ToiletRollInteraction}
                alt={"uben-logo"}
                fill
                priority
                sizes="100%"
                className="object-cover -z-10"
            />
        </section>
    );
}

export default IntroDetail;
