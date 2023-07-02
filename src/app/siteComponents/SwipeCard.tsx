"use Client";
import React from "react";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";

export const getProducts = async () => {
  const res = await client.fetch(`*[_type=="product" ]{
    title,
    image[], 
    price,
   }`);
  return res;
};

interface IProduct {
  title: string;
  image: IImage[];
  price: number;
}

const SwipeCard = async () => {
  const data: IProduct[] = await getProducts();

  return (
    <div className="">
      {data.slice(0, 3).map((item) => (
        <div className="">
          <Image
            src={urlForImage(item.image[0]).url()}
            alt={item.title}
            height={250}
            width={250}
          />
        </div>
      ))}
    </div>
  );
};

export default SwipeCard;
