import overviewIcon from "@icons/overview.svg";
import overviewActive from "@icons/overview-active.svg";
import linksIcon from "@icons/links.svg";
import linksActive from "@icons/links-active.svg";
import analyticsIcon from "@icons/analytics.svg";
import analyticsActive from "@icons/analytics-active.svg";
import profileIcon from "@icons/profile.svg";
import profileActive from "@icons/profile-active.svg";

export const links = [
    {
        id: 1,
        longUrl: "https://www.google.com/absclsijealjkjiaoja",
        shortUrl: "https://trimmer.com/abcde",
        date: "2024-01-01",
        clicks: 0,
    },
    {
        id: 2,
        longUrl: "https://www.facebook.com/klajiaoojalialj",
        shortUrl: "https://trimmer.com/fghij",
        date: "2024-01-05",
        clicks: 5,
    },
    {
        id: 3,
        longUrl: "https://www.twitter.com/kl46463gewtwfj",
        shortUrl: "https://trimmer.com/klmno",
        date: "2021-01-11",
        clicks: 2,
    },
    {
        id: 4,
        longUrl: "https://www.instagram.com/klaj90-938-jalialj",
        shortUrl: "https://trimmer.com/pqrst",
        date: "2021-01-19",
        clicks: 1,
    },
    {
        id: 5,
        longUrl: "https://www.discord.com/kl489908_iikj",
        shortUrl: "https://trimmer.com/uvwxy",
        date: "2024-01-24",
        clicks: 0,
    },
    {
        id: 6,
        longUrl: "https://www.google.com/klajiaoojalialj",
        shortUrl: "https://trimmer.com/z1234",
        date: "2024-01-29",
        clicks: 1,
    },
];

export const navbarLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Features", path: "/#features" },
    { id: 3, name: "Pricing", path: "/#pricing" },
    { id: 4, name: "FAQ", path: "/#faq" },
];

export const sidenavLinks = [
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
