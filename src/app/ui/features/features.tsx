import SectionTitle from "./section-title";
import FeaturesGrid from "./features-grid";

export default function Features() {
    return (
        <section
            className='relative min-h-[100vh] w-full bg-darkBlue text-zinc-50 [background-image:url("/images/bg-features-left.png"),url("/images/bg-features-right.png")] bg-no-repeat [background-position:top_left,top_right]'
            id='features'
        >

            <SectionTitle
                firstTitle='Why'
                highlight='Choose'
                secondTitle='Us'
                description='Shorten it. Customize it. Track it. Trimmer does it all.'
        />
        <FeaturesGrid />
        </section>
    );
}
