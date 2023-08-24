import React from "react";
import { Input } from "@/components/ui/input";

const NewsLetter = () => {
  return (
    <div className="relative mx-10 mt-16 mb-10 md:my-12 md:mx-24">
      <div className="grid grid-cols-6 m-auto">
        <div className="relative col-span-12 md:col-start-2 md:col-span-4">
          <div className="hidden md:block absolute text-[#f2f3f7] text-5xl lg:text-9xl font-extrabold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-1]">
            Newsletter
          </div>
          <h1 className="text-[#212121] text-3xl font-bold mb-4 text-center">
            Subscribe Our Newsletter
          </h1>
          <p className="text-[#212121] text-base font-[300] mb-4 text-center">
            Get the latest information and promo offers directly
          </p>
          <div className="flex flex-col justify-center md:flex-row">
            <Input
              type="email"
              placeholder="Input email"
              className="relative border shrink-[2] focus:border-0 focus:outline-none border-[gray] border-solid h-[42px] py-[10px] pr-0 md:pr-[120px] pl-[20px]  md:w-auto"
            />
            <button className="bg-[#212121] items-center mt-4 md:mt-0 ml-0 md:ml-4 font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black w-full md:w-auto h-[42px] hover:border-solid px-2 py-1 rounded-md text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
