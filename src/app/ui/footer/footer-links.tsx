import { footerLinks } from "@lib/data";
export default function FooterLinks() {
    return (
        <div className="grid grid-cols-4 gap-x-8">
            {footerLinks.map((link) => {
                const { id, title, links } = link;
                return (
                    <div key={id}>
                        <h3 className="font-semibold leading-6 pb-2">{title}</h3>
                        <ul>
                            {links.map((item, index) => {
                                return (
                                    <li key={index} className="leading-6">
                                        <a href='#' className="hover:text-purple transitionEase">{item}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                );
            })}
        </div>
    );
}
