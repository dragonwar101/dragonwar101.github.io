import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/configs/firebase";
import MainHeader from "./sections/header";
import MainFooter from "./sections/footer";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Mohamed Tarek Azab | Full Stack Developer",
  description: "Full stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full box-border">
      <body className="flex flex-col h-full">
        <MainHeader />
        <main className="flex-1 h-auto box-border w-100">
          {children}
        </main>
        <footer className="bg-slate-200 text-center">
          <MainFooter />
        </footer>
      </body>
    </html>
  );
}
