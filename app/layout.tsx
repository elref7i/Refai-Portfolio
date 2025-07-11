import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ahmed Khaled Refai - Frontend Developer",
  description:
    "Dynamic and innovative Frontend Developer specializing in React.js and Next.js. Building robust, scalable, and user-centric web applications.",
  keywords: [
    "Frontend Developer",
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Ahmed Khaled Refai" }],
  creator: "Ahmed Khaled Refai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elrefai.dev",
    title: "Ahmed Khaled Refai - Frontend Developer",
    description:
      "Dynamic and innovative Frontend Developer specializing in React.js and Next.js.",
    siteName: "Ahmed Khaled Refai Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Khaled Refai - Frontend Developer",
    description:
      "Dynamic and innovative Frontend Developer specializing in React.js and Next.js.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={inter.className}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
