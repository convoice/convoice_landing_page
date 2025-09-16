import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import clsx from "clsx";

import "@/styles/tailwind.css";
import { type Metadata } from "next";
import { Header } from "@/components/Header";
import { InactiveProjectProvider } from "@/components/InactiveProjectProvider";

export const metadata: Metadata = {
  title: "Convoice | Automated Calling for Businesses",
  description:
    "Convoice helps businesses automate their calling workflows, saving them time and money, while improving customer satisfaction.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const generalSans = LocalFont({
  src: [
    {
      path: "../fonts/GeneralSans-Extralight.otf",
      weight: "200",
      style: "extralight",
    },
    {
      path: "../fonts/GeneralSans-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../fonts/GeneralSans-Regular.otf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../fonts/GeneralSans-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/GeneralSans-Semibold.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../fonts/GeneralSans-Bold.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-general-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "h-full scroll-smooth bg-white antialiased",
        inter.variable,
        generalSans.variable,
      )}
    >
      <body className="relative flex h-full flex-col">
        <InactiveProjectProvider>
          <Header />
          {/*<HiddenHeader />*/}
          {children}
        </InactiveProjectProvider>
      </body>
    </html>
  );
}
