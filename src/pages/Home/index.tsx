import * as React from "react";
import HeroSection from "@/containers/Home/HeroSection";
import ListMovies from "@/containers/Home/ListMovies";

import { useQuery } from "react-query";
import { getLatestMovies } from "@/api/movie";

const Home: React.FC = () => {
  const { data } = useQuery("latestMovies", getLatestMovies);

  return (
    <>
      <HeroSection />
      <ListMovies title="Latest Movies" movies={data?.data.results} />
    </>
  );
};

export default Home;
