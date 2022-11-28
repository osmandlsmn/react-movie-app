import type { TrendResponse } from "@/types";
import axios from "./index";

export const getTrends = () => axios.get<TrendResponse>("/trending/movie/week");
