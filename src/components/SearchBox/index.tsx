import React, { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { searchMovie } from "@/api/movie";
import ListMovies from "./ListMovies";
import MovieLoader from "./MovieLoader";
import { TbSearch } from "react-icons/tb";

const SearchInput: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useQuery(["searchMovies", searchValue], () => searchMovie(searchValue), { enabled: !!searchValue });

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="text-md group relative h-10 w-[370px] rounded-lg bg-secondary ">
      <div className="flex h-full items-center gap-x-3 px-3">
        <TbSearch />
        <input className="w-full bg-transparent outline-none placeholder:tracking-wider" placeholder="search movies" onChange={handleSearch} />
      </div>
      <div
        tabIndex={1}
        className="no-scrollbar absolute top-12 z-50 hidden max-h-[350px] w-full overflow-x-auto rounded-lg bg-secondary group-focus-within:block"
      >
        {isLoading ? <MovieLoader /> : <ListMovies movies={data?.data.results} />}
      </div>
    </div>
  );
};

export default SearchInput;
