import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justin Moore - Software Developer",
  description: "Justin Moore's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    className="scroll-smooth">
      <body className=""
      >
        
        {children}
      </body>
    </html>
  );
}
