import React from "react";
import SpanL from "../common/spanL";
import { ChevronRight } from "lucide-react";
import LinkL from "../common/linkL";

function Intro() {
    return (
        <section
            id="intro"
            className="flex justify-between gap-[10%] px-[15%] py-[140px] text-primary"
        >
            <SpanL className="flex-1 text-5xl">Intro.title</SpanL>
            <div className="flex-1 flex flex-col items-start gap-8">
                <SpanL>Intro.description</SpanL>
                <div className="flex gap-12">
                    <LinkL
                        href={"/"}
                        className="bg-primary text-tertiary px-9 py-2 rounded-full"
                    >
                        Common.about
                    </LinkL>
                    <LinkL
                        href={"/"}
                        className="font-medium p-2"
                        afterElement={
                            <ChevronRight size={20} strokeWidth={1.5} />
                        }
                    >
                        Intro.explore
                    </LinkL>
                </div>
            </div>
        </section>
    );
}

export default Intro;
