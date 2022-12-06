export interface Series {
  backdrop_path: null | string;
  first_air_date?: Date;
  genre_ids: number[];
  id: number;
  media_type: MediaType;
  name?: string;
  origin_country?: string[];
  original_language: string;
  original_name?: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  vote_average: number;
  vote_count: number;
  adult?: boolean;
  original_title?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  release_date: Date;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum MediaType {
  Movie = "movie",
}

export type Multi = Movie & Series;
export interface SearchResponse {
  page: number;
  results: Multi[];
  total_pages: number;
  total_results: number;
}

export interface LatestResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export enum BackdropSizes {
  w300 = "w300",
  w780 = "w780",
  w1280 = "w1280",
  original = "original",
}

export enum OriginalLanguage {
  De = "de",
  En = "en",
  Pl = "pl",
  Tr = "tr",
}
