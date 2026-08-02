import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import MovieRow from "../components/MovieRow";
import { useOutletContext } from "react-router-dom";

interface Movie {
  id: string;
  title: string;
  poster: string;
}

export default function Home() {

  // ✅ RECEIVE SEARCH FROM LAYOUT
  const { search } = useOutletContext<{ search: string }>();

  const [trending, setTrending] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    fetchMovies("now_playing").then(setTrending);
    fetchMovies("popular").then(setPopular);
    fetchMovies("top_rated").then(setTopRated);
  }, []);

  const filteredTrending = trending.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <h2>Trending</h2>
      <MovieRow movies={filteredTrending} />

      <h2>Popular</h2>
      <MovieRow movies={popular} />

      <h2>Top Rated</h2>
      <MovieRow movies={topRated} />
    </div>
  );
}
