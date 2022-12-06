import * as React from "react";
import HeroSection from "@/containers/Home/HeroSection";
import LatestMovies from "@/containers/Home/LatestMovies";

import { useQuery } from "react-query";
import { getLatestMovies } from "@/api/movie";

const Home: React.FC = () => {
  const { data } = useQuery("latestMovies", getLatestMovies);

  return (
    <>
      <HeroSection />
      <LatestMovies />
    </>
  );
};

export default Home;
