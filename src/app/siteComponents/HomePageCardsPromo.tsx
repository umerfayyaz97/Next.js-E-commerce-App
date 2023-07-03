import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const HomePageCardsPromo = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-4">
        {/* Left side elements of grid */}
        <div className="col-span-12 lg:col-span-6">
          <div className="flex flex-col bg-[#d6d6d8] justify-between px-8 lg:flex-row ">
            <div className="">
              <h3 className="text-2xl font-bold">GET UPTO 60%</h3>
              <p className="font-[400] text-lg">For the Summer Season</p>
            </div>
            <Image src="/event1.png" alt="event1" height={282} width={218} />
          </div>
          <div className="flex flex-col items-center justify-center px-8 pt-12 pb-8 mt-5 text-white bg-black">
            <h3 className="font-[800] text-4xl">GET 30% OFF</h3>
            <p className="font-[400] text-sm">USE PROMO CODE</p>
            <Button
              className="py-2 mt-1 text-white rounded-md px-9 text-[17px] font-[700] bg-slate-500"
              variant="secondary"
            >
              DINEWEEKENDSALE
            </Button>
          </div>
        </div>
        {/* Right side elements of grid */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className="inline-block bg-[#efe1c7]  w-full h-full pt-auto ">
            <div className="text-center">
              <p className="font-[400] text-[15px]">Flex Sweatshirt</p>
              <div className="mb-8 lg:mb-12 xl:mb-4">
                <span className="line-through">$100.00</span>
                <span className="font-[600] text-lg">$75.00</span>
              </div>
              <Image
                className="m-auto"
                src="/event2.png"
                alt="event2"
                height={300}
                width={240}
              />
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <div className=" relative inline-block bg-[#d7d7d9]  w-full h-full pt-auto ">
            <div className="text-center">
              <p className="font-[400] text-[15px]">Flex Push Button Bomber</p>
              <div className="mb-8 lg:mb-12 xl:mb-3">
                <span className="line-through">$225.00</span>
                <span className="font-[600] text-lg">$190.00</span>
              </div>
              <Image
                className="m-auto"
                src="/event3.png"
                alt="event3"
                height={300}
                width={240}
              />
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </>
  );
};

export default HomePageCardsPromo;
