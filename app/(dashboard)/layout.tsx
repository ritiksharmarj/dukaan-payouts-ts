import Header from '@/components/header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='grid h-screen grid-cols-1 tablet:grid-cols-[224px_minmax(300px,_1fr)] grid-rows-[auto_minmax(300px,_1fr)]'>
      <Header />
      <Sidebar />

      <main className='overflow-y-auto p-4 tablet:p-8'>
        <div className='mx-auto'>{children}</div>
      </main>
    </div>
  );
}
