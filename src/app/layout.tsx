import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "simple-icons-font/font/simple-icons.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hello World",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      {/* <body className={inter.className + " bg-pink-50"}> */}
      <body className="bg-pink-50">
        <Header />
        <main className="min-h-screen">{children}</main>
        <footer className="text-center p-5">
          <span className="inline-block">&copy; 2023 雛鶴あい</span>
        </footer>
      </body>
    </html>
  );
}
