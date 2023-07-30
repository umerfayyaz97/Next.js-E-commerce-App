import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import Image from "next/image";

const Homepage = () => {
  return (
    <>
      <div className="flex flex-col py-12 gap-y-8 lg:flex-row ">
        <div className="flex-1 ">
          <Button className=" bg-blue-50" variant="secondary">
            <h3 className="font-bold text-blue-950">SALE 70%</h3>
          </Button>
          <h1 className="text-4xl font-bold tracking-tight scroll-m-20 lg:text-8xl">
            An Industrial Take on Streetwear
          </h1>
          <br></br>
          <p className="leading-7 text-xl [&:not(:first-child)]:mt-6">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Moon Mart outfits.
          </p>
          <br></br>
          <Button asChild className="text-xl">
            <Link href="/All-Products">
              {" "}
              <CgShoppingCart />
              Start Shopping
            </Link>
          </Button>
          <br></br>
          <br></br>
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="flex gap-4">
              <Image src="/Featured1.png" alt="01" height={50} width={100} />
              <Image src="/Featured2.png" alt="02" height={50} width={100} />
            </div>
            <div className="flex gap-4">
              <Image src="/Featured3.png" alt="03" height={50} width={100} />
              <Image src="/Featured4.png" alt="04" height={50} width={100} />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image src="/header.png" alt="home" width={800} height={500} />
        </div>
      </div>
      <div className="text-center ">
        <h3 className="text-xs font-semibold text-blue-600 ">PROMOTIONS</h3>
        <h1 className="text-2xl font-bold ">Our Promotion Events</h1>
        <br></br>
      </div>
    </>
  );
};

export default Homepage;
