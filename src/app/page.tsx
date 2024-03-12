import Header from "@ui/header";
import HomeComponent from "@ui/home/home";
import Features from "@ui/features/features";
export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <HomeComponent />
                <Features />
            </main>
            <footer></footer>
        </div>
    );
}
