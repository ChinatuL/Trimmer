import Image from "next/image";
import bigLink from "@images/big-link.png";
import bigScissor from "@images/big-scissor.png";
import LinkShortenerForm from "./link-shortener-form";
export default function HomeComponent() {
    return (
        <div className='flex items-center relative w-full px-24 h-[calc(100vh-3.5rem)] bg-gradient-to-r from-darkBlue from-35% to-darkPurple to-100%'>
            <Image src={bigLink} alt='' className='absolute top-4 left-4' />
            <Image src={bigLink} alt='' className='absolute bottom-0 right-4' />
            <div className='w-[65%] text-zinc-50 '>
                <h1 className='text-5xl font-bold leading-[60px]'>
                    Unleash the power of short links with our advanced{" "}
                    <span className='text-purple'>URL shortening</span>{" "}
                    solution.
                </h1>
                <p className='text-xl leading-8 w-[50ch]'>
                    Make your links more manageable, trackable, and shareable
                    with our advanced URL shortening service.
                </p>
                <LinkShortenerForm />
            </div>
            <div className='w-[35%] h-full grid place-items-center'>
                <Image src={bigScissor} alt='' className='object-contain' />
            </div>
        </div>
    );
}
