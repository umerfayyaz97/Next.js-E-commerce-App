import React from "react";
import { client } from "@/lib/sanityClient";

export const getProducts = async () => {
  const res = await client.fetch(`*`);
  return res;
};

const SwipeCard = async () => {
  const data = await getProducts();
  console.log(data);

  return <div>SwipeCard</div>;
};

export default SwipeCard;
