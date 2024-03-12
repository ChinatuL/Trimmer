import Header from "@ui/header";
import HomeComponent from "@ui/home/home";
import Features from "@ui/features/features";
import Pricing from "@ui/pricing/pricing";
export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <HomeComponent />
                <Features />
                <Pricing />
            </main>
            <footer></footer>
        </div>
    );
}
