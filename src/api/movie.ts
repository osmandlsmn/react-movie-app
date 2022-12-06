import type { SearchResponse, LatestResponse } from "@/types";
import axios from "./index";

export const getLatestMovies = () => axios.get<LatestResponse>("/trending/movie/week");

export const searchMovie = (searchValue: string) => axios.get<SearchResponse>(`/search/multi?query=${searchValue}`);
