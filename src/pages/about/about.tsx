import React from "react";
import Intro from "./components/intro";
import IntroDetail from "./components/introDetail";
import Stats from "./components/stats";
import Contact from "./components/contact";

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
