import React from "react";
import SpanL from "../common/spanL";
import ToiletPaperPattern from "../../../public/images/toilet-paper-pattern.png";
import Image from "next/image";
import Haksan from "../../../public/images/partners/haksan.png";
import Joco from "../../../public/images/partners/joco.png";
import Seger from "../../../public/images/partners/seger.png";

function Partners() {
    return (
        <section
            id="partners"
            style={{ backgroundImage: `url(${ToiletPaperPattern.src})` }}
            className="bg-repeat bg-contain shadow-[0_0_50px_0)] z-10"
        >
            <div className="flex items-center bg-tertiary/50 px-[10%] py-10 gap-40">
                <SpanL className="text-primary text-lg font-black">
                    Partners.title
                </SpanL>
                <div className="relative flex-1 aspect-video">
                    <Image
                        src={Haksan}
                        alt={"world"}
                        fill
                        priority
                        sizes="100%"
                        className="object-contain"
                    />
                </div>
                <div className="relative flex-1 aspect-video">
                    <Image
                        src={Joco}
                        alt={"world"}
                        fill
                        priority
                        sizes="100%"
                        className="object-contain"
                    />
                </div>
                <div className="relative flex-1 aspect-video">
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
