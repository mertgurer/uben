import React from "react";
import SpanL from "@/components/common/spanL";
import { ChevronRight } from "lucide-react";
import LinkL from "@/components/common/linkL";

function Intro() {
    return (
        <section
            id="intro"
            className="flex justify-between gap-[10%] px-[15%] py-[140px] text-primary max-2xl:px-[10%] max-md:flex-col max-md:px-[5%] max-md:pt-14 max-md:pb-16 max-md:gap-7"
        >
            <SpanL className="flex-1 text-5xl max-2xl:text-4xl">
                Home.Intro.title
            </SpanL>
            <div className="flex-1 flex flex-col items-start gap-8 max-2xl:gap-5">
                <SpanL>Home.Intro.description</SpanL>
                <div className="flex gap-12 max-2xl:gap-10">
                    <LinkL
                        href={"/"}
                        className="bg-primary text-tertiary px-9 py-2 rounded-full hover:-translate-y-1 duration-500 max-2xl:px-7"
                    >
                        Common.about
                    </LinkL>
                    <LinkL
                        href={"/"}
                        className="group font-medium p-2 hover:translate-x-1 duration-500"
                        afterElement={
                            <ChevronRight
                                size={20}
                                strokeWidth={1.5}
                                className="group-hover:translate-x-4 duration-500"
                            />
                        }
                    >
                        Home.Intro.explore
                    </LinkL>
                </div>
            </div>
        </section>
    );
}

export default Intro;
