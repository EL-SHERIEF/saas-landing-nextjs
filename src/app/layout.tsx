import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import favicon from "@/assets/favicon.svg";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Future Bots - $1 Pathway to Productivity",
  description:
    "Limited Time Special: Gain 99 Powerful Automation Bots to automate 90% of your tasks and slash $10k in costs in 2025 for just $1.",
  keywords: [
    "AI automation",
    "SaaS",
    "automation bots",
    "productivity",
    "Future Bots",
  ],
  icons: {
    icon: favicon,
  },
  alternates: {
    canonical: "https://futurebots.vercel.app/",
  },
  openGraph: {
    title: "Future Bots - $1 Pathway to Productivity",
    description:
      "Limited Time Special: Gain 99 Powerful Automation Bots to automate 90% of your tasks and slash $10k in costs in 2025 for just $1.",
    url: "https://futurebots.vercel.app/",
    siteName: "Future Bots",
    images: [
      {
        url: "https://futurebots.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Future Bots - $1 Pathway to Productivity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Bots - $1 Pathway to Productivity",
    description:
      "Limited Time Special: Gain 99 Powerful Automation Bots to automate 90% of your tasks and slash $10k in costs in 2025 for just $1.",
    site: "@futurebots",
    creator: "@futurebots",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
      </body>
    </html>
  );
}
