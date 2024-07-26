/* eslint-disable camelcase */
import type { Metadata } from "next";
import { Merriweather, Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import React from "react";

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-openSans",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bookland",
  description:
    "Bookland is an open-source web application that creates a vibrant online community for book lovers and aspiring writers. This platform allows users to both read and share original books and stories, fostering a collaborative environment for literary enthusiasts.",
  icons: {
    icon: "/assets/images/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${openSans.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
