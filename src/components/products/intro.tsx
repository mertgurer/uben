import React from "react";
import SpanL from "../common/spanL";

function Intro() {
    return (
        <section
            id="intro"
            className="flex flex-col items-center justify-center gap-7 py-10 bg-secondary text-tertiary text-center max-2xl:gap-4"
        >
            <SpanL className="text-5xl max-md:text-4xl">Products.title</SpanL>
            <SpanL>Products.description</SpanL>
        </section>
    );
}

export default Intro;
