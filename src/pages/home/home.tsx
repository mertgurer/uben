import Welcome from "@/pages/home/components/welcome";
import Intro from "@/pages/home/components/intro";
import IntroDetail from "@/pages/home/components/introDetail";
import Stats from "@/pages/home/components/stats";
import WorldDistribution from "@/pages/home/components/worldDistribution";
import Partners from "@/pages/home/components/partners";
import Products from "@/pages/home/components/products";

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
