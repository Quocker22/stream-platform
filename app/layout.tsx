import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Sidenav } from "@/components/sidenav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.home.name,
    template: `%s - ${siteConfig.home.name}`,
  },
  description: siteConfig.home.description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.home.name,
    description: siteConfig.home.description,
    images: [
      {
        url: siteConfig.thumbnail,
        width: 800,
        height: 600,
        alt: siteConfig.home.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.home.name,
    description: siteConfig.home.description,
    images: [siteConfig.thumbnail],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
