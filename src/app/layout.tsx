import type { Metadata } from "next";
import { Karla, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-body",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zari.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ZARI | Luxury Heritagewear",
    template: "%s | ZARI",
  },
  description:
    "Discover luxury heritagewear, bespoke panjabis, embroidered sherwanis, and elevated essentials crafted for modern celebrations.",
  keywords: [
    "zari",
    "ZARI",
    "fashion",
    "luxury heritagewear",
    "bespoke panjabi",
    "designer sherwani",
    "premium ethnic wear",
  ],
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${karla.variable} h-full antialiased`}
    >
      <body
        className="flex min-h-screen 
      flex-col bg-background text-primary-light"
      >
        {children}
      </body>
    </html>
  );
}
