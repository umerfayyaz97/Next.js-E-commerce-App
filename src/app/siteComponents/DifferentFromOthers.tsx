import React from "react";
import Link from "next/link";
import Image from "next/image";

const DifferentFromOthers = () => {
  return (
    <>
      <div className="mt-16 mb-10 md:my-12 md:mx-24">
        <div className="w-full text-end">
          <h1 className="text-[#212121] text-left text-5xl lg:w-[45%] mb-4 lg:ml-auto lg:text-left font-bold ">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
          <br></br>
          <br></br>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="relative col-span-12 lg:col-span-4 md:col-span-12">
            <div className="font-bold text-[#212121] text-6xl lg:text-8xl absolute opacity-[.07] z-[1]">
              Different from others
            </div>
            <div className="grid grid-cols-2">
              <div className="col-span-1 col-start-1 mb-4">
                <h3 className="text-[#212121] text-lg font-bold">
                  Using Good Quality Materials
                </h3>
                <p className="text-[#212121] font-[300] text-base">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
              <div className="col-span-1 col-start-2 mb-4">
                <h3 className="text-[#212121] text-lg font-bold">
                  100% Handmade Products
                </h3>
                <p className="text-[#212121] font-[300] text-base">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
              <div className="col-span-1 col-start-1 mb-4">
                <h3 className="text-[#212121] text-lg font-bold">
                  Modern Fashion Design
                </h3>
                <p className="text-[#212121] font-[300] text-base">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
              <div className="col-span-1 col-start-2 mb-4">
                <h3 className="text-[#212121] text-lg font-bold">
                  Discount for Bulk Orders
                </h3>
                <p className="text-[#212121] font-[300] text-base">
                  Lorem ipsum dolor sit amt, consectetur adipiscing elit
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 m-auto lg:col-span-4 md:col-span-6">
            <Image
              src="/product7.png"
              width={300}
              height={400}
              alt="product7"
            />
          </div>
          <div className="col-span-12 m-auto lg:col-span-4 md:col-span-6">
            <p className="text-justify text-base text-[#212121]">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href="/products">
              <button className="bg-[#212121] mt-8 font-[600] transition all hover:bg-white hover:text-black hover:border hover:border-black w-[150px] h-[42px] hover:border-solid px-2 py-1 rounded-md text-white">
                See All products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DifferentFromOthers;
