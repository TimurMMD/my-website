// app/layout.tsx
import type { Metadata } from "next";
import { Varela } from "next/font/google";
import "./globals.css";
import TransitionWrapper from "./components/TransitionWrapper";

const varela = Varela({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela-round",
});

export const metadata: Metadata = {
  title: "Timur Mamadaliyev – Portfolio",
  description: "Personal portfolio showcasing my work and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={varela.variable}>
        <TransitionWrapper>{children}</TransitionWrapper>
      </body>
    </html>
  );
}
