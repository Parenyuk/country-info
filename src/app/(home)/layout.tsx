import { Header } from "@/shared/components/Header";

export default async function HomeLayout({
  children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
