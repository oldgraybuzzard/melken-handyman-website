import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Melken Handyman Solutions | Veteran-Owned Handyman Services in Central Florida",
  description: "Professional handyman services in Seminole County and Orange County, Florida. Veteran-owned business offering drywall repair, pressure cleaning, electrical, plumbing, and more. Licensed & insured.",
  keywords: ["handyman", "Seminole County", "Orange County", "Florida", "veteran-owned", "drywall repair", "pressure cleaning", "electrical", "plumbing"],
  openGraph: {
    title: "Melken Handyman Solutions",
    description: "Veteran-owned handyman services in Central Florida",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
