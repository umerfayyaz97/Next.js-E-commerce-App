import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "./siteComponents/Footer";
import Navbar from "./siteComponents/Navbar";
import Providers from "@/components/Provider";
import { ClerkProvider } from "@clerk/nextjs/app-beta";

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
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <Providers>
            <Navbar />
<<<<<<< HEAD
=======
            {/* <Header /> */}
>>>>>>> 537449d4f8e3fbf3890b65426157f2c2abab6cf7
            <main className="px-14">{children}</main>
            <br></br>
            <br></br>
            <Footer />
          </Providers>
        </body>
      </ClerkProvider>
    </html>
  );
}
