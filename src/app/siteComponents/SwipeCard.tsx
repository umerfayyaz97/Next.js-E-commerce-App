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
    <>
      <div className="text-center">
        <h3 className="text-xs font-semibold text-blue-600">PRODUCTS</h3>
        <h1 className="text-2xl font-bold">Check What We Have</h1>
        <br></br>
      </div>
      <div className="grid grid-cols gap-y-2 md:grid-cols-[repeat(3,auto)] justify-center  gap-x-6">
        {data.slice(0, 3).map((item) => (
          <div className="transition-all duration-300 transform product-card hover:scale-105">
            <img
              src={urlForImage(item.image[0]).url()}
              alt={item.title}
              height={300}
              width={300}
              // className="w-full h-auto"
            />
            <h2 className="font-bold text-center">{item.title}</h2>
            <h3 className="font-bold text-center">${item.price}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

// ------------------------------------------------------------
//     <>
//       <div className="text-center ">
//         <h3 className="text-xs font-semibold text-blue-600 ">PRODUCTS</h3>
//         <h1 className="text-2xl font-bold ">Check What We Have</h1>
//         <br></br>
//       </div>
//       <div className="grid grid-col  md:grid-cols-[repeat(3,auto)] justify-center gap-x-6">
//         {data.slice(0, 3).map((item) => (
//           <div className="">
//             <Image
//               src={urlForImage(item.image[0]).url()}
//               alt={item.title}
//               height={300}
//               width={300}
//             />
//             <h2 className="font-bold text-center">{item.title}</h2>
//             <h3 className="font-bold text-center">${item.price}</h3>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

export default SwipeCard;
