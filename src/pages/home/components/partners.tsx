import React from "react";
import SpanL from "@/components/common/spanL";
import ToiletPaperPattern from "../../../../public/images/toilet-paper-pattern.png";
import Image from "next/image";
import Haksan from "../../../../public/images/partners/haksan.png";
import Joco from "../../../../public/images/partners/joco.png";
import Seger from "../../../../public/images/partners/seger.png";

function Partners() {
    return (
        <section
            id="partners"
            style={{
                backgroundImage: `url(${ToiletPaperPattern.src})`,
            }}
            className="bg-contain shadow-[0_0_30px_-15px] z-10"
        >
            <div className="flex items-center bg-tertiary/50 px-[10%] py-10 gap-40 max-2xl:px-[8%] max-2xl:gap-32 max-2xl:py-6 max-md:flex-col max-md:gap-4">
                <SpanL className="text-primary text-lg font-black max-2xl:text-base max-2xl:font-bold max-md:text-center">
                    Partners.title
                </SpanL>
                <div className="relative flex-1 aspect-video max-md:w-1/2">
                    <Image
                        src={Haksan}
                        alt={"world"}
                        fill
                        priority
                        sizes="100%"
                        className="object-contain"
                    />
                </div>
                <div className="relative flex-1 aspect-video max-md:w-1/2">
                    <Image
                        src={Joco}
                        alt={"world"}
                        fill
                        priority
                        sizes="100%"
                        className="object-contain"
                    />
                </div>
                <div className="relative flex-1 aspect-video max-md:w-1/2">
                    <Image
                        src={Seger}
                        alt={"world"}
                        fill
                        priority
                        sizes="100%"
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default Partners;
