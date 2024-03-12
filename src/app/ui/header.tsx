import Image from "next/image";
import logo from "@icons/logo.svg";
import TrimmerLogo from "./trimmer-logo";
import Navlinks from "./nav-links";
import LinkBtn from "./link-btn";
export default function Header() {
    return (
        <header className='flex justify-between items-center w-full h-14 px-24 bg-darkBlue text-zinc-50 bg-gradient-to-r from-darkBlue from-35% to-darkPurple to-100%'>
            <TrimmerLogo />
            <Navlinks />
            <div className='flex gap-8'>
                <LinkBtn text='Login' href='/login' />
                <button className='w-28 text-purple border border-purple rounded-md hover:opacity-80 transitionEase'>
                    Try for free
                </button>
            </div>
        </header>
    );
}
