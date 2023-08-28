import React from "react";
import { client } from "@/lib/sanityClient";
import { Image as IImage } from "sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

const getProducts = async () => {
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

const allProducts = async () => {
  const data: IProduct[] = await getProducts();
  // console.log(data);

  return (
    <>
      <div className="grid grid-cols gap-y-2 md:grid-cols-[repeat(3,auto)] justify-center  gap-x-6">
        {data.map((item, index) => (
          // <div >
          <div
            className="transition-all duration-300 transform product-card hover:scale-105"
            key={index}
          >
            <Link href={`/Details/${item._id}`}>
              <Image
                src={urlForImage(item.image[0]).url()}
                alt={item.title}
                height={300}
                width={300}
                // loading="lazy"
              />
              <h2 className=" font-[600] text-lg text-center">{item.title}</h2>
              <h3 className="font-[600] text-lg text-center">${item.price}</h3>
            </Link>
          </div>
          // </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default allProducts;

// import React, { useState, useEffect, useMemo } from "react";
// import { client } from "@/lib/sanityClient";
// import { Image as IImage } from "sanity";
// import Image from "next/image";
// import { urlForImage } from "../../../sanity/lib/image";
// import Link from "next/link";

// const getProducts = async () => {
//   const res = await client.fetch(`*[_type=="product" ]{
//     title,
//     image[],
//     price,
//     _id,
//    }`);
//   return res;
// };

// interface IProduct {
//   title: string;
//   image: IImage[];
//   price: number;
//   _id: string;
// }

// const AllProducts: React.FC = () => {
//   const [data, setData] = useState<IProduct[]>([]);

//   useEffect(() => {
//     async function fetchData() {
//       const productsData: IProduct[] = await getProducts();
//       setData(productsData);
//     }
//     fetchData();
//   }, []);

//   const memoizedProducts = useMemo(() => {
//     return (
//       <div className="grid grid-cols gap-y-2 md:grid-cols-[repeat(3,auto)] justify-center gap-x-6">
//         {data.map((item, index) => (
//           <div
//             className="transition-all duration-300 transform product-card hover:scale-105"
//             key={index}
//           >
//             <Link href={`/Details/${item._id}`}>
//               <Image
//                 src={urlForImage(item.image[0]).url()}
//                 alt={item.title}
//                 height={300}
//                 width={300}
//               />
//               <h2 className="font-[600] text-lg text-center">{item.title}</h2>
//               <h3 className="font-[600] text-lg text-center">${item.price}</h3>
//             </Link>
//           </div>
//         ))}
//       </div>
//     );
//   }, [data]);

//   return (
//     <>
//       {memoizedProducts}
//       <br />
//       <br />
//       <br />
//     </>
//   );
// };

// export default AllProducts;
