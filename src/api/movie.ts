import type { TrendResponse, SearchResponse } from "@/types";
import axios from "./index";

export const getTrends = () => axios.get<TrendResponse>("/trending/movie/week");

export const searchMovie = (searchValue: string) => axios.get<SearchResponse>(`/search/movie?query=${searchValue}`);
