import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import ProgressBar from "./components/progressBar/ProgressBar";
import { Suspense } from "react";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Neh Joshi | Software Engineer",
  description:
    "Learn more about Neh Joshi's experience as a software engineer. See his projects, resume and personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <Header />
        <Suspense fallback={null}>
          <ProgressBar />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
