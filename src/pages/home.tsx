import Welcome from "@/components/home/welcome";
import Intro from "@/components/home/intro";
import IntroDetail from "@/components/home/introDetail";
import Stats from "@/components/home/stats";
import WorldDistribution from "@/components/home/worldDistribution";
import Partners from "@/components/home/partners";
import Products from "@/components/home/products";

function Home() {
    return (
        <main className="flex flex-col">
            <Welcome />
            <Intro />
            <IntroDetail />
            <Stats />
            <WorldDistribution />
            <Partners />
            <Products />
        </main>
    );
}

export default Home;
