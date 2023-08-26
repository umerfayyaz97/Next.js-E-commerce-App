"use Client";
import React from "react";
import { client } from "@/lib/sanityClient";
import { Image as IImage, SanityClient } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";
import AddToCart from "@/app/siteComponents/AddToCart";

const getProducts = async () => {
  const res = await client.fetch(`*[_type=="product"  ]{
    price,
      _id,
      image[],
      title,
      details,
      care,
      price,
     }`);
  return res;
};

interface IProduct {
  title: string;
  image: IImage[];
  price: number;
  _id: string;
  details: string;
  care: string;
}

const ProductDescription = async ({ params }: { params: { id: string } }) => {
  const data: IProduct[] = await getProducts();
  const product = data.find((i) => i._id === params.id);

  return (
    <>
      {product && (
        <div className="flex flex-col">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2">
              <div className="w-full md:hidden">
                <Image
                  src={urlForImage(product.image[0]).url()}
                  alt="image"
                  height={300}
                  width={300}
                />{" "}
                {/* Display enlarged image on mobile screens */}
              </div>
              <div className="hidden md:flex">
                <div className="w-1/2 mb-4 md:w-1/4 md:mb-0">
                  <Image
                    src={urlForImage(product.image[0]).url()}
                    alt="image"
                    height={100}
                    width={100}
                  />{" "}
                  {/* Display small image */}
                </div>
                <div className="w-1/2 md:w-3/4 md:pl-8">
                  <Image
                    src={urlForImage(product.image[0]).url()}
                    alt="image"
                    height={300}
                    width={300}
                  />{" "}
                  {/* Display enlarged image */}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div>
                <h1 className="text-2xl font-bold md:text-4xl">
                  {product.title}
                </h1>
                <h2 className="mt-4 text-2xl font-bold md:text-4xl">
                  ${product.price}
                </h2>
                <div className="mt-4">
                  <AddToCart item={product} />
                  {/* <Button onClick={handleAddToCartClick} /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <h2 className="mt-8 text-2xl font-bold md:text-4xl">
              Product Details
            </h2>
            <hr className="my-4" />
            <p>{product.details}</p>
          </div>
          <div className="w-full">
            <h2 className="mt-8 text-2xl font-bold md:text-4xl">
              Product Care
            </h2>
            <hr className="my-4" />
            <p>{product.care}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDescription;
