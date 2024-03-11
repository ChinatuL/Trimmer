import Image from "next/image";
import smallLink from "@images/small-link.png";
import smallScissor from "@images/small-scissor.png";
export default function LinkShortenerForm() {
    return (
        <form className='relative mt-8 py-6 w-full border border-darkBlue shadow-[-6px_6px_0_0_#9D37ED,_3px_-3px_0_0_#0d0c23] rounded-[20px]'>
            <Image src={smallLink} alt='' className='absolute top-7 left-4' />
            <Image
                src={smallScissor}
                alt=''
                className='absolute top-6 right-4'
            />
            <div className='flex gap-4 items-center justify-center'>
                <label htmlFor='link' className='sr-only'>
                    Enter a link to shorten
                </label>
                <input
                    type='text'
                    id='link'
                    placeholder='Enter Your Link Here'
                    className='bg-darkBlue border border-zinc-50 py-3 px-4 placeholder:text-center rounded-lg w-72'
                />
                <button type='submit' className='w-32 py-3 border border-purple bg-purple rounded-md transitionEase hover:opacity-70'>
                    Shorten Link
                </button>
            </div>
        </form>
    );
}