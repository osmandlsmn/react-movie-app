import type { Movie } from "@/types";
import * as React from "react";
import { getPhotoURL } from "@/helpers";

interface ListMoviesProps {
  movies: Movie[] | undefined;
}

const ListMovies: React.FC<ListMoviesProps> = ({ movies }) => {
  return (
    <>
      {movies?.map((movie, index) => (
        <div className="flex p-2 space-x-2" key={index}>
          <img src={getPhotoURL(movie.poster_path)} className="w-24 h-24 rounded-lg" alt="" />
          <div className="max-w-[220px]">
            <h5 className="truncate font-bold text-white">{movie.title}</h5>
            <p className="text-xs text-ellipsis overflow-hidden max-h-11">{movie.overview}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListMovies;
