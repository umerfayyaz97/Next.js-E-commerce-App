import Image from "next/image";
import Homepage from "./siteComponents/Homepage";
import HomePageCardsPromo from "./siteComponents/HomePageCardsPromo";
import SwipeCard from "./siteComponents/SwipeCard";
import DifferentFromOthers from "./siteComponents/DifferentFromOthers";

export default function Home() {
  return (
    <>
      <Homepage />
      <HomePageCardsPromo />
      {/* @ts-ignore server component */}
      <SwipeCard />
      <DifferentFromOthers />
    </>
  );
}
