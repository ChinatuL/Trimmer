import SectionTitle from "@ui/section-title";
import { pricingPlans } from "@lib/data";
import PricingCard from "./pricing-card";

export default function Pricing() {
    return (
        <section
            className='min-h-[100vh] w-full bg-pricing-bg bg-no-repeat bg-cover text-zinc-50 pt-8'
            id='pricing'
        >
            <SectionTitle
                firstTitle='Experience transparent pricing'
                description="Whether you're a solo content creator, a growing startup, or a large enterprise, we have the perfect plan for you."
            />
            <div className='grid grid-cols-3 gap-4 max-w-[85vw] mx-auto'>
                {pricingPlans.map((plan) => {
                    return <PricingCard key={plan.id} {...plan} />;
                })}
            </div>
        </section>
    );
}
