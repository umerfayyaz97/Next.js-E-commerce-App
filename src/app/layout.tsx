// "use Client";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./siteComponents/Footer";
import Navbar from "./siteComponents/Navbar";
import Providers from "@/components/Provider";
import { ClerkProvider } from "@clerk/nextjs/app-beta";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MoonMart",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      {/* <SignedIn>
        <SignedOut> */}
      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className="px-14">{children}</main>
            <br></br>
            <br></br>
            <Footer />
          </Providers>
        </body>
      </html>
      {/* </SignedOut>
      </SignedIn> */}
    </ClerkProvider>
  );
}
