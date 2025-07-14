import React from "react";
import Intro from "@/components/about/intro";
import IntroDetail from "@/components/about/introDetail";
import Stats from "@/components/about/stats";
import Contact from "@/components/about/contact";

function About() {
    return (
        <main className="flex flex-col">
            <Intro />
            <IntroDetail />
            <Stats />
            <Contact />
        </main>
    );
}

export default About;
