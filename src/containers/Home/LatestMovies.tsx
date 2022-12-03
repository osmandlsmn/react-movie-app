import * as React from "react";
import { useQuery } from "react-query";
import { getTrends } from "@/api/movie";
import MovieCard from "./MovieCard";

const LatestMovies: React.FC = () => {
  const { data } = useQuery("movies", getTrends);

  return (
    <section className=" mt-10 md:mx-0">
      <div>
        <h1 className="text-3xl font-semibold text-white">Latest Movies</h1>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-5 sm:mt-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {data?.data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </section>
  );
};

export default LatestMovies;
