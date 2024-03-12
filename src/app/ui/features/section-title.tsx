type SectionTitleProps = {
    firstTitle: string;
    highlight?: string;
    secondTitle?: string;
    description: string;
};

export default function SectionTitle({
    firstTitle,
    highlight,
    secondTitle,
    description,
}: SectionTitleProps) {
    return (
        <div className='flex flex-col text-center gap-1 font-semibold'>
            <h2 className='text-3xl leading-10'>
                {firstTitle}{" "}
                {highlight ? (
                    <span className='text-purple'>{highlight}</span>
                ) : (
                    ""
                )}{" "}
                {secondTitle}
            </h2>
            <p className='text-lg'>{description}</p>
        </div>
    );
}
