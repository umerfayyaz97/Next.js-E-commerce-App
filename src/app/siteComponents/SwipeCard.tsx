"use Client";
import React from "react";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import AddToCart from "../AddToCart";

export const getProducts = async () => {
  const res = await client.fetch(`*[_type=="product" ]{
    title,
    image[], 
    price,
    _id,
   }`);
  return res;
};

interface IProduct {
  title: string;
  image: IImage[];
  price: number;
  _id: string;
}

const SwipeCard = async () => {
  const data: IProduct[] = await getProducts();

  return (
    <>
      <div className="text-center">
        <h3 className="text-xs font-semibold text-blue-600">PRODUCTS</h3>
        <h1 className="text-2xl font-bold">Check What We Have</h1>
        <br></br>
      </div>
      <div className="grid grid-cols gap-y-2 md:grid-cols-[repeat(3,auto)] justify-center  gap-x-6">
        {data.slice(0, 3).map((item, index) => (
          <div>
            <Link href={`/Details/${item._id}`}>
              <div
                key={index}
                className="transition-all duration-300 transform product-card hover:scale-105"
              >
                <Image
                  src={urlForImage(item.image[0]).url()}
                  alt={item.title}
                  height={300}
                  width={300}
                />
                <h2 className=" font-[600] text-lg text-center">
                  {item.title}
                </h2>
                <h3 className="font-[600] text-lg text-center">
                  ${item.price}
                </h3>
              </div>
            </Link>
            <div className="flex justify-center">
              <AddToCart />
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default SwipeCard;
