import SideMenu from '@/components/SideMenu';

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex items-center'>
      <div className='w-64'>
        <SideMenu />
      </div>
      {children}
    </main>
  );
}
