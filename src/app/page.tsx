import Homepage from "./siteComponents/Homepage";
import HomePageCardsPromo from "./siteComponents/HomePageCardsPromo";
import SwipeCard from "./siteComponents/SwipeCard";
import DifferentFromOthers from "./siteComponents/DifferentFromOthers";
import NewsLetter from "./siteComponents/NewsLetter";
import Counter from "./Counter";

export default function Home() {
  return (
    <>
      <Homepage />
      <HomePageCardsPromo />
      {/* @ts-ignore server component */}
      <SwipeCard />
      <DifferentFromOthers />
      <br></br>
      <br></br>
      <br></br>
      <NewsLetter />
      <Counter />
    </>
  );
}
