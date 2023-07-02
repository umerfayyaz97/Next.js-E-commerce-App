import React from "react";
import { client } from "@/lib/sanityClient";
import { Image } from "sanity";

export const getProducts = async () => {
  const res = await client.fetch(`*[_type=="product" ]{
    title,
    image,
    price,
   }`);
  return res;
};

interface IProduct {
  title: string;
  image: Image;
  price: number;
}

const SwipeCard = async () => {
  const data: IProduct[] = await getProducts();

  return <div>SwipeCard</div>;
};

export default SwipeCard;
