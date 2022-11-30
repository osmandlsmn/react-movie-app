import { getTrends } from "@/api/movie";
import MovieCard from "@/components/Shared/MovieCard";
import * as React from "react";
import { useQuery } from "react-query";

const Home: React.FC = () => {
  const { data } = useQuery("movies", getTrends);

  return (
    <>
      <section className="mt-10 md:mx-0">
        <div>
          <h1 className="text-3xl font-semibold text-white">Explore</h1>
          <p className="mt-1 text-sm">What are you gonna watch today ?</p>
        </div>
        <div className="relative mt-4 sm:mt-6">
          <div className="xs:pl-10 xs:pb-14 absolute top-0 bottom-0 left-0 right-0 flex max-w-xl flex-col place-content-end rounded-lg pl-4 text-white md:pl-10 md:pb-10">
            <h3 className="text-1xl font-semibold leading-10 sm:mb-5 sm:text-3xl">
              Weather With You
            </h3>
            <p className="hidden md:block">
              Corrupt politicians, frenzied nationalists, and other warmongering
              forces constantly jeopardize the thin veneer of peace between
              neighboring countries Ostania and Westalis.{" "}
            </p>
          </div>
          <img
            className=" w-full rounded-lg 2xl:h-[400px] "
            src="./images/banner.png"
            alt=""
          />
        </div>
      </section>
      <section className=" mt-10 md:mx-0">
        <div>
          <h1 className="text-3xl font-semibold text-white">New Realease</h1>
        </div>
        <div className="  mt-4 grid grid-cols-2 gap-5 sm:mt-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {data?.data.results.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
