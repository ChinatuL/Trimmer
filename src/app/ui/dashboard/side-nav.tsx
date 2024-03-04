import Link from "next/link";
import Image from "next/image";
import TrimmerLogo from "@ui/trimmer-logo";
import NavLinks from "@dashboard/nav-links";

export default function SideNav() {
    return (
        <div className='h-full border-r-2 border-r-purple rounded-xl px-8 pt-4 bg-gradient-to-b from-[#0B0A1E] from-40% to-[#1d0138] to-100% drop-shadow-[0px_4px_4px_0_rgba(0,0,0,0.25)]'>
            <nav className='flex flex-col gap-8'>
                <div>
                    <Link href='/'>
                        <TrimmerLogo />
                    </Link>
                </div>
                <div className='flex flex-col gap-6'>
                    <NavLinks />
                    <button className='flex gap-4 items-center text-lg text-zinc-50 hover:text-purple transitionEase'>
                        <svg
                            className='stroke-zinc-50 hover:stroke-purple'
                            width='32'
                            height='32'
                            viewBox='0 0 32 32'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M7.51472 7.51472C2.82843 12.201 2.82843 19.799 7.51472 24.4853C12.201 29.1716 19.799 29.1716 24.4853 24.4853C29.1716 19.799 29.1716 12.201 24.4853 7.51472M16 4V16'
                                stroke-width='1.5'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                            />
                        </svg>
                        <span className=''>Logout</span>
                    </button>
                </div>
            </nav>
        </div>
    );
}
