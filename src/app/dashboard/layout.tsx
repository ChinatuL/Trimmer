import SideNav from "@dashboard/side-nav";
export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
  return (
      <div className='grid grid-cols-[auto_1fr] w-full min-h-[100vh] h-full bg-[#0B0A1E]'>
          <SideNav />
          <main>{children}</main>
      </div>
  );
}
