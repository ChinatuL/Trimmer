import Navlink from "./nav-link"
import { navbarLinks as links} from "@lib/data";

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
