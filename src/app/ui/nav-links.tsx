import Navlink from "./nav-link"
const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Features", path: "/#features" },
    { id: 3, name: "Pricing", path: "/#pricing" },
    { id: 4, name: "FAQ", path: "/#faq" },
];

export default function Navlinks() {
  return <div className="flex justify-between w-[35%]">
    {links.map((link) => {
      return (
          <>
              <Navlink key={link.id}  {...link} />
          </>
      );
    })}
  </div>;
}
