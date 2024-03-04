import SideNav from "@dashboard/side-nav";
import DashboardHeader from "@dashboard/header";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='grid grid-cols-[auto_1fr] w-full min-h-[100vh] h-full bg-[#0B0A1E]'>
            <SideNav />
            <main className="flex flex-col">
                <DashboardHeader />
                <section>{children}</section>
            </main>
        </div>
    );
}
