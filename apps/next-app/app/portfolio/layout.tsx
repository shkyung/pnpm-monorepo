import { Footer, MainHeader } from '@/app/components';

export default function PLayout({
                                     children
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  console.error("--P Layout render!!")
  return (
   <div style={{backgroundColor: "yellow"}}>{children}</div>
  );
}
