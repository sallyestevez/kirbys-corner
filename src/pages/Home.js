import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import LearnMoreButton from "../components/LearnMoreButton";
import FeaturedGame from "../components/FeaturedGame";
import HeroImage from "../components/HeroImage";
import GameData from "../components/game-components/GameData";

function Home() {
  return (
    <>
      <Header />
      <main className="page-wrapper">
        <HeroImage />
        <FeaturedGame item={GameData} />
      </main>
      <Footer />
    </>
  );
}

export default Home;
