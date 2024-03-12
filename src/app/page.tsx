import Header from "@ui/header";
import HomeComponent from "@ui/home/home";
import Features from "@ui/features/features";
import Pricing from "@ui/pricing/pricing";
import Reviews from "@ui/reviews/reviews";
export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <HomeComponent />
                <Features />
                <Pricing />
                <Reviews />
            </main>
            <footer></footer>
        </div>
    );
}
