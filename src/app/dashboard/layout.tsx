import SideMenu from '@/components/SideMenu';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex items-center'>
      <SideMenu />
      {children}
    </main>
  );
}
