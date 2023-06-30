import Image from "next/image";
import { Button } from "@/components/ui/button";
import Header from "./siteComponents/Header";
import Footer from "./siteComponents/Footer";
import Homepage from "./siteComponents/Homepage";
import HomePageCardsPromo from "./siteComponents/HomePageCardsPromo";
import SwipeCard from "./siteComponents/SwipeCard";

export default function Home() {
  return (
    <>
      <Homepage />
      <HomePageCardsPromo />
      {/* @ts-ignore server component */}
      <SwipeCard />
    </>
  );
}
