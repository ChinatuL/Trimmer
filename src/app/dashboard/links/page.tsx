import LinksHeader from "@dashboard/links/links-header";
import LinksList from "@dashboard/links/links-list";
export default function Page() {
    return (
        <section className='bg-darkBlue h-full rounded-lg'>
            <LinksHeader />
            <LinksList />
        </section>
    );
}
