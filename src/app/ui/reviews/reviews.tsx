import SectionTitle from "@ui/section-title";
import ReviewCard from "./review-card";
import { reviews } from "@lib/data";
export default function Reviews() {
    return (
        <section
            className="w-full min-h-[100vh] bg-darkBlue text-zinc-50 [background-image:url('/images/bg-reviews-top.png'),url('/images/bg-reviews-bottom.png')] bg-no-repeat [background-position:top_left,bottom_left] py-8"
            id='faq'
        >
            <SectionTitle
                firstTitle='What Our'
                highlight='Clients'
                secondTitle='Say'
            />
            <div className='grid grid-cols-3 gap-4 max-w-[85vw] mx-auto pt-8'>
                {reviews.map((review) => {
                    return <ReviewCard key={review.id} {...review} />;
                })}
            </div>
        </section>
    );
}
