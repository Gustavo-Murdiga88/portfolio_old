import React from "react";
import "./globals.css";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bem vindo!",
  description: "presentation of my professional profile",
  themeColor: "#18012F",
  authors: [
    {
      name: "Gustavo Murdiga",
      url: "https://www.linkedin.com/notifications/",
    },
  ],
  assets: "/public/memoji.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
        style={{
          overflow: "hidden",
        }}
      >
        {children}
      </body>
    </html>
  );
}
