import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

// ✅ Popular
export const fetchPopularMovies = async () => {
  const res = await axios.get(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );
  return res.data.results;
};

// ✅ Top Rated
export const fetchTopRatedMovies = async () => {
  const res = await axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );
  return res.data.results;
};

// ✅ Trending
export const fetchTrendingMovies = async () => {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );
  return res.data.results;
};

// ✅ Search
export const searchMovies = async (query: string) => {
  const res = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.data.results;
};
// ✅ Fetch trailer
export const fetchMovieTrailer = async (movieId: number) => {
  const res = await axios.get(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
  );

  const trailer = res.data.results.find(
    (video: any) => video.type === "Trailer"
  );

  return trailer;
};

