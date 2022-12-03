import * as React from "react";
import type { Movie } from "@/types/index";

interface CardProps {
  movie: Movie;
}

const MovieCard: React.FC<CardProps> = ({ movie }) => {
  return (
    <div className="flex flex-col  rounded-lg bg-[#050E12]">
      <img className="h-[240px] w-full rounded-lg" src={"https://image.tmdb.org/t/p/w220_and_h330_face/" + movie.poster_path} alt="" />
      <div className="p-2">
        <h3 className="text-lg font-semibold text-white truncate ">{movie.title}</h3>
        <p>{movie.release_date.toString()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
