import { Image as IImage } from "sanity";
import { client } from "../../../sanity/lib/client";

export const getProducts = async () => {
  const res = await client.fetch(`*[_type=="product"]{
      image[],
      _id,
    }`);
  return res;
};

export interface IProduct {
  image: IImage[];
  _id: string;
}
