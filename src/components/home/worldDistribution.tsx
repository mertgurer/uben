import React from "react";
import Image from "next/image";
import World from "../../../public/images/world.png";
import { Dot } from "lucide-react";
import SpanL from "../common/spanL";

function WorldDistribution() {
    return (
        <section
            id="worldDistribution"
            className="bg-[#F1F1F1] flex flex-col px-[15%] pt-[100px]"
        >
            <div className="flex gap-[50%] items-end">
                <div className="flex-1 flex flex-col">
                    <div className="flex items-center -ml-6">
                        <Dot size={28} strokeWidth={1.75} />
                        <SpanL>WorldDistribution.tagline</SpanL>
                    </div>
                    <SpanL className="text-5xl font-medium mt-1">
                        WorldDistribution.title
                    </SpanL>
                </div>
                <SpanL className="flex-1">WorldDistribution.description</SpanL>
            </div>
            <div className="relative aspect-[2.6]">
                <Image
                    src={World}
                    alt={"world"}
                    fill
                    priority
                    sizes="100%"
                    className="object-cover"
                />
            </div>
        </section>
    );
}

export default WorldDistribution;
