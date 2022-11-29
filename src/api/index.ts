import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
  params: { api_key: import.meta.env.VITE_MOVIE_API_KEY },
});
