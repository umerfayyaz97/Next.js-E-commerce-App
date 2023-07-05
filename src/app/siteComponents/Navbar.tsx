import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CgShoppingCart } from "react-icons/cg";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Female
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Male
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
                >
                  Kids
                </a>
                <a
                  href="#"
                  className="px-3 py-2 text-sm font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
                >
                  All Products
                </a>
              </div>
            </div>
          </div>
          <div className="items-center hidden space-x-2 md:flex sm:space-x-10">
            <Input
              className="mx-2 sm:mx-4"
              type="search"
              placeholder="Search here"
            />
            <Button variant="secondary">
              <CgShoppingCart />
            </Button>
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
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
          >
            Female
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
          >
            Male
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
          >
            Kids
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-base font-medium text-black rounded-md hover:bg-gray-700 hover:text-white"
          >
            All Products
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
