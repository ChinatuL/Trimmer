import { links } from "@lib/data";
import LinkComponent from "./link";
export default function LinksList() {
    return (
        <div>
            {links.map((link) => {
                return <LinkComponent key={link.id} {...link} />;
            })}
        </div>
    );
}
