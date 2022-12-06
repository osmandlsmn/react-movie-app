import * as React from "react";
import { BackdropSizes, Multi } from "@/types";
import { getPhotoURL } from "@/helpers";

interface ListMoviesProps {
  movies: Multi[] | undefined;
}

const ListMovies: React.FC<ListMoviesProps> = ({ movies }) => {
  return (
    <>
      {movies?.map((movie, index) => (
        <div className="flex space-x-2 p-2" key={index}>
          <img src={getPhotoURL(BackdropSizes.w300, movie.poster_path)} className="h-24 w-24 rounded-lg" alt="" />
          <div className="max-w-[220px]">
            <h5 className="truncate font-bold text-white">{movie.name ?? movie.original_title}</h5>
            <p className="max-h-11 overflow-hidden text-ellipsis text-xs">{movie.overview}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListMovies;
