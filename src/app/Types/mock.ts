"use Client";

import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";

export const getProducts = async () => {
  const res = await client.fetch(`*[_type=="product" ]{
    title,
    image[],
    price,
    _id,
   }`);
  return res;
};

export interface IProduct {
  title: string;
  image: IImage[];
  price: number;
  _id: string;
}
