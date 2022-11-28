import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_MOVIE_API_URL,
  params: { api_key: "9eb158a047cd680a2d3fc9aba7c6f4f7" },
});
