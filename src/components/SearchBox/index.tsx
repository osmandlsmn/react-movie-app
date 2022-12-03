import React, { ChangeEvent, useState } from "react";
import { useQuery } from "react-query";
import { searchMovie } from "@/api/movie";

import { SearchIcon } from "@/components/Icons/index";
import ListMovies from "./ListMovies";
import MovieLoader from "./MovieLoader";

const SearchInput: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading } = useQuery(["movieSearch", searchValue], () => searchMovie(searchValue), { enabled: !!searchValue });

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="relative text-md h-10 w-[370px] bg-secondary group rounded-lg ">
      <div className="h-full flex items-center gap-x-3 px-3">
        <SearchIcon />
        <input className="w-full bg-transparent outline-none placeholder:tracking-wider" placeholder="search movies" onChange={handleSearch} />
      </div>
      <div
        tabIndex={1}
        className="no-scrollbar group-focus-within:block hidden absolute top-12 w-full bg-secondary rounded-lg max-h-[350px] overflow-x-auto z-50"
      >
        {isLoading ? <MovieLoader /> : <ListMovies movies={data?.data.results} />}
      </div>
    </div>
  );
};

export default SearchInput;
