export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className='bg-auth-bg object-cover w-full h-[100vh]'>
            {children}
        </main>
    );
}
