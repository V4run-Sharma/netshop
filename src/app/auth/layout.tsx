export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-screen absolute top-0 z-[999] flex justify-center items-center auth-bg dark:dark-auth-bg">
      {children}
    </main>
  );
}
