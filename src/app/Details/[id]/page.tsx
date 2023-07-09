"use Client";
import React from "react";
import { client } from "@/lib/sanityClient";
import { Image as IImage, SanityClient } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../../sanity/lib/image";

export const getProducts = async () => {
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
  const image = data.find((i) => i._id === params.id)?.image;
  const title = data.find((i) => i._id === params.id)?.title;
  const price = data.find((i) => i._id === params.id)?.price;
  const details = data.find((i) => i._id === params.id)?.details;
  const care = data.find((i) => i._id === params.id)?.care;

  //   return (
  //     <>
  //       {image && (
  //         <div className="flex">
  //           <div className="w-1/4">
  //             <Image
  //               src={urlForImage(image[0]).url()}
  //               alt="image"
  //               height={300}
  //               width={300}
  //             />{" "}
  //             {/* Display small image */}
  //           </div>
  //           <div className="w-1/2">
  //             <Image
  //               src={urlForImage(image[0]).url()}
  //               alt="image"
  //               height={300}
  //               width={300}
  //             />{" "}
  //             {/* Display enlarged image */}
  //           </div>
  //           <div className="w-1/4">
  //             <h1 className="text-2xl font-bold">{title}</h1>
  //             <p className="text-lg">Title</p>
  //             <p className="text-lg">Available Sizes:</p>
  //             <div className="flex items-center mt-4">
  //               <button className="px-4 py-2 mr-2 bg-gray-300">-</button>
  //               <input
  //                 className="w-16 px-4 py-2 text-center"
  //                 type="number"
  //                 defaultValue="1"
  //               />
  //               <button className="px-4 py-2 ml-2 bg-gray-300">+</button>
  //             </div>
  //             <button className="px-4 py-2 mt-4 text-white bg-blue-500">
  //               Add to Cart
  //             </button>
  //           </div>
  //           <div>
  //             <h2 className="mt-8 text-2xl font-bold">Price</h2>
  //             <hr className="my-4" />
  //             <p>{price}</p>
  //           </div>
  //           <div>
  //             <h2 className="mt-8 text-2xl font-bold">Product Details</h2>
  //             <hr className="my-4" />
  //             <p>{details}</p>
  //           </div>
  //           <div>
  //             <h2 className="mt-8 text-2xl font-bold">Product Care</h2>
  //             <hr className="my-4" />
  //             <p>{care}</p>
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   );
  // };

  return (
    <>
      {image && (
        <div className="flex flex-col">
          <div className="flex">
            <div className="w-1/4">
              <Image
                src={urlForImage(image[0]).url()}
                alt="image"
                height={100}
                width={100}
              />{" "}
              {/* Display small image */}
            </div>
            <div className="w-1/2">
              <Image
                src={urlForImage(image[0]).url()}
                alt="image"
                height={300}
                width={300}
              />{" "}
              {/* Display enlarged image */}
            </div>
            <div className="flex flex-col justify-between w-1/4">
              <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <div className="flex items-center">
                  <p className="text-lg">Title</p>
                  <h2 className="mt-8 ml-4 text-2xl font-bold">{price}</h2>
                </div>
                <p className="text-lg">Available Sizes:</p>
                <div className="flex items-center">
                  <button className="px-4 py-2 mr-2 bg-gray-300">-</button>
                  <input
                    className="w-16 px-4 py-2 text-center"
                    type="number"
                    defaultValue={1}
                  />
                  <button className="px-4 py-2 ml-2 bg-gray-300">+</button>
                </div>
              </div>
              <div className="mt-4">
                <button className="px-4 py-2 text-white bg-blue-500">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <h2 className="mt-8 text-2xl font-bold">Product Details</h2>
              <hr className="my-4" />
              <p>{details}</p>
            </div>
          </div>
          <div className="w-full">
            <h2 className="mt-8 text-2xl font-bold">Product Care</h2>
            <hr className="my-4" />
            <p>{care}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDescription;
