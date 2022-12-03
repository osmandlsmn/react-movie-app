import * as React from "react";
import HeroSection from "@/containers/Home/HeroSection";
import LatestMovies from "@/containers/Home/LatestMovies";

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <LatestMovies />
    </>
  );
};

export default Home;
