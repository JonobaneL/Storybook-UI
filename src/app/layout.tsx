import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ToastContainer from "@/components/Toast/ToastContainer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "Storybook UI",
  description:
    "Storybook-based UI component system that includes: Input, Toast and Sidebar Menu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased font-poppins min-h-dvh flex flex-col`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
