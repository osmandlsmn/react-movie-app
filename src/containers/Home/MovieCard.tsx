import * as React from "react";
import { BackdropSizes, Movie } from "@/types/index";
import { getPhotoURL } from "@/helpers";

interface CardProps {
  movie: Movie;
}

const MovieCard: React.FC<CardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col  rounded-lg bg-[#050E12]">
      <div className="h-min overflow-hidden rounded-md">
        <img
          className="h-[240px] w-full cursor-pointer rounded-lg transition-all duration-500 hover:scale-125"
          src={getPhotoURL(BackdropSizes.w300, movie.backdrop_path)}
          alt=""
        />
      </div>
      <div className="p-2">
        <h3 className="truncate text-lg font-semibold text-white ">{movie.title}</h3>
        <p>{movie.release_date.toString()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
