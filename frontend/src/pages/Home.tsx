import { useEffect, useState } from "react";
import { fetchMovies } from "../services/api";
import MovieRow from "../components/MovieRow";
import Loader from "../components/Loader";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetchMovies("now_playing").then(setTrending),
      fetchMovies("popular").then(setPopular),
      fetchMovies("top_rated").then(setTopRated),
    ]).finally(() => setLoading(false));
  }, []);

  const filteredTrending = trending.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="page">
        <Loader />
      </div>
    );
  }

  return (
    <div className="page">
      <div className="section-header">
        <h2 className="section-title">Trending</h2>
      </div>
      {filteredTrending.length ? (
        <MovieRow movies={filteredTrending} />
      ) : (
        <p className="row-empty">No movies match your search.</p>
      )}

      <div className="section-header">
        <h2 className="section-title">Popular</h2>
      </div>
      <MovieRow movies={popular} />

      <div className="section-header">
        <h2 className="section-title">Top Rated</h2>
      </div>
      <MovieRow movies={topRated} />
    </div>
  );
}
