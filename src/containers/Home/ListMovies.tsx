import type { LatestResponse, Movie } from "@/types";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import IconButton from "@/components/UI/Button/Icon";
import MovieCard from "./MovieCard";

interface ListMoviesProps {
  title: string;
  movies: Movie[] | undefined;
}

const ListMovies: React.FC<ListMoviesProps> = ({ title, movies }) => {
  return (
    <section className=" mt-10 md:mx-0">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <div className="my-auto flex space-x-1">
          <IconButton className="swiper-button-prev">
            <MdNavigateBefore />
          </IconButton>
          <IconButton className="swiper-button-next">
            <MdNavigateNext />
          </IconButton>
        </div>
      </div>
      <div className="mt-5">
        <Swiper
          spaceBetween={20}
          modules={[Navigation]}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          breakpoints={{
            0: { slidesPerView: 1 },
            400: { slidesPerView: 2 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1000: { slidesPerView: 6 },
          }}
        >
          {movies?.map((movie, index) => (
            <SwiperSlide key={index}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ListMovies;
