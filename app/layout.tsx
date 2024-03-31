import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/Header/Header";
import SideBar from "@/components/SideBar/SideBar";
import MobileSideBar from "@/components/MobileSideBar.tsx/MobileSideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yumi Lim Website",
  description: "Web Developer - React, Next, Typescript, MongoDB, Node",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <div>
            <SideBar />
          </div>
          <div className="layout_right">
            <Header />
            <main>{children}</main>
          </div>
        </div>
        <div className="mobile_layout">
          <Header />
          <MobileSideBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
