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
  title: "Conference Ticket Generator | Create & Customize Your Event Tickets",
  description: "Easily generate and customize conference tickets with personalized details, avatars, and a seamless user experience.",
  keywords: "conference ticket generator, event ticket creator, custom tickets, conference pass, digital ticketing",
  authors: [{ name: "Ahmed", url: "https://portfolio-v2-ashy-delta-91.vercel.app/" }],
  openGraph: {
    title: "Conference Ticket Generator",
    description: "Create and personalize your conference tickets effortlessly.",
    url: "https://hngx-stage2-conference-ticket-generator-nn8xm6z5t.vercel.app/",
    type: "website",
    images: [
      {
        url: "/Vector.svg",
        width: 1200,
        height: 630,
        alt: "Conference Ticket Generator Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Conference Ticket Generator",
    description: "Generate personalized conference tickets with ease.",
    images: ["https://i.ibb.co/zhjTr0mY/phone.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
