import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tower of Tech",
  description: "Technical playlists",
};

function Header() {
  return (
    <div className="w-full flex sticky top-0 z-50 backdrop-blur-sm bg-black/15">
      <div className="p-2 md:p-0 md:pb-2 md:pt-4 container max-w-3xl mx-auto flex">
        <a href="/">
          <h1 className="text-lg sm:text-3xl">Tower of Tech</h1>
          <h4 className="text-xs sm:text-sm">9 out of 10 tech specialists recommend!</h4>
        </a> 
        <a
          href="https://ko-fi.com/danielduel"
          target="_blank"
          className="ml-auto"
        >
          <img
            height="36"
            className="border-0 h-9"
            src="https://storage.ko-fi.com/cdn/kofi3.png?v=6"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>
      </div>
    </div>
  )
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
      </body>
    </html>
  );
}
