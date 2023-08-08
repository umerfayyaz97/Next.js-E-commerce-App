"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";
import { SignIn, SignUp } from "@clerk/nextjs/app-beta";
import { UserButton } from "@clerk/nextjs/app-beta";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartValue = useSelector(
    (state: RootState) => state.cartSlice.totalQuantity
  );

  return (
    <nav className="">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="hover">
              <span className="flex items-center font-bold text-white">
                <Image src="/Metamart.jpg" alt="image" width={60} height={10} />
                <h1 className="ml-2 font-semibold text-slate-950">Moon Mart</h1>
              </span>
            </Link>
            <div className="hidden md:block">
              <div className="flex items-center ml-10 space-x-4">
                <Link
                  href="/Female"
                  className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Female
                </Link>
                <Link
                  href="/Male"
                  className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Male
                </Link>
                <Link
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Kids
                </Link>
                <Link
                  href="/All-Products"
                  className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
                >
                  All Products
                </Link>
              </div>
            </div>
          </div>
          <div className="items-center hidden space-x-2 md:flex sm:space-x-10">
            {/* ... Rest of the elements ... */}
            <Input
              className="mx-2 sm:mx-4"
              type="search"
              placeholder="Search here"
            />
            <Link href="/Cart">
              <Button variant="secondary" className="relative ">
                <span className="absolute top-0 w-4 h-4 px-0 py-0 text-xs text-center text-white bg-red-500 rounded-full right-3">
                  {cartValue}
                </span>

                {/* <SignIn /> */}
                <CgShoppingCart />
              </Button>
            </Link>
            {/* <Link href={"/sign-in"}>Sign</Link> */}
            {/* <UserButton afterSignOutUrl="/" /> */}
          </div>
          <div className="flex -mr-2 md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Three horizontal lines for closed menu */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* "X" icon for open menu */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/Female"
            className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
          >
            Female
          </Link>
          <Link
            href="/Male"
            className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
          >
            Male
          </Link>
          <Link
            href="#"
            className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
          >
            Kids
          </Link>
          <Link
            href="/All-Products"
            className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
          >
            All Products
          </Link>
        </div>
        {/* Shopping Cart Button in Mobile Menu */}
        <div className="flex justify-center pb-3">
          <Link href="/Cart">
            <Button variant="secondary" className="relative">
              <span className="absolute top-0 w-4 h-4 px-0 py-0 text-xs text-center text-white bg-red-500 rounded-full right-3">
                {cartValue}
              </span>
              <CgShoppingCart />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
