import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexobots | Enterprise IT Infrastructure",
  description:
    "Enterprise-grade structured cabling, surveillance, access control, and managed IT services engineered by Nexobots.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
