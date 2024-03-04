import overviewIcon from "@icons/overview.svg";
import overviewActive from "@icons/overview-active.svg";
import linksIcon from "@icons/links.svg";
import linksActive from "@icons/links-active.svg";
import analyticsIcon from "@icons/analytics.svg";
import analyticsActive from "@icons/analytics-active.svg";
import profileIcon from "@icons/profile.svg";
import profileActive from "@icons/profile-active.svg";
import Navlink from "./nav-link";

const links = [
    {
        id: 1,
        name: "Overview",
        icon: overviewIcon,
        href: "/dashboard",
        activeIcon: overviewActive,
    },
    {
        id: 2,
        name: "Links",
        icon: linksIcon,
        href: "/dashboard/links",
        activeIcon: linksActive,
    },
    {
        id: 3,
        name: "Analytics",
        icon: analyticsIcon,
        href: "/dashboard/analytics",
        activeIcon: analyticsActive,
    },
    {
        id: 4,
        name: "Profile",
        icon: profileIcon,
        href: "/dashboard/profile",
        activeIcon: profileActive,
    },
];

export default function NavLinks() {
    return (
        <div className='flex flex-col gap-6'>
            {links.map((link) => {
                return <Navlink key={link.id} {...link} />;
            })}
        </div>
    );
}
