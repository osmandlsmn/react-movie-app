import { getPhotoURL } from "@/helpers";
import { BackdropSizes, LatestResponse, Movie } from "@/types";
import React, { useEffect, useState } from "react";
import { useQueryClient } from "react-query";

const HeroSection: React.FC = () => {
  const queryClient = useQueryClient();
  const latestMovies = queryClient.getQueryData<{ data: LatestResponse }>("latestMovies");
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    setMovie(latestMovies?.data.results[Math.floor(Math.random() * latestMovies?.data.results.length)]);
  }, [latestMovies]);

  return (
    <section className="mt-10 md:mx-0">
      <div>
        <h1 className="text-3xl font-semibold text-white">Explore</h1>
        <p className="mt-1 text-sm">What are you gonna watch today ?</p>
      </div>
      <div className="relative mt-4 sm:mt-6">
        <div className="bg-line absolute top-0 h-full w-full bg-gradient-to-r from-gray-800 to-transparent">
          <div className="xs:pl-10 xs:pb-14 absolute top-0 bottom-0 left-0 right-0 flex max-w-xl flex-col place-content-end rounded-lg pl-4 text-white md:pl-10 md:pb-10">
            <h3 className="text-1xl font-semibold leading-10 sm:mb-5 sm:text-3xl">{movie?.title}</h3>
            <p className="hidden md:block">{movie?.overview}</p>
          </div>
        </div>
        <img className=" opacity- w-full rounded-lg object-cover 2xl:h-[400px]" src={getPhotoURL(BackdropSizes.w1280, movie?.backdrop_path)} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
