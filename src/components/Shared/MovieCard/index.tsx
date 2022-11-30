import type { Movie } from "@/types/index";
import * as React from "react";

interface CardProps {
  movie: Movie;
}

const MovieCard: React.FC<CardProps> = ({ movie }) => {
  const shortTitle = (title: Movie["title"]) =>
    title.length > 16 ? title.substring(0, 16) + ".." : title;

  return (
    <div className=" rounded-lg bg-[#050E12]">
      <img
        className="h-[240px] w-full rounded-lg"
        src={
          "https://image.tmdb.org/t/p/w220_and_h330_face/" + movie.poster_path
        }
        alt=""
      />
      <div className="px-2 pt-1">
        <h3 className="text-lg font-semibold text-white">
          {shortTitle(movie.title)}
        </h3>
        <p>{movie.release_date.toString()}</p>
      </div>
    </div>
  );
};

export default MovieCard;
