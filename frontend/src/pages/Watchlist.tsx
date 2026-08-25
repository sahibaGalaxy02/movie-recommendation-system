import { useEffect, useState } from "react";
import { getSavedMovies } from "../services/favoriteApi";

interface Movie {
  _id: string;
  title: string;
  poster: string;
}

export default function Watchlist() {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSavedMovies()
      .then((res: any) => setMovies(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page">
      <div className="section-header">
        <h2 className="section-title">My Watchlist</h2>
      </div>

      {!loading && movies.length === 0 ? (
        <p className="empty-state">
          You haven't saved any movies yet — tap "Save" on a movie card to add one.
        </p>
      ) : (
        <div className="watchlist-grid">
          {movies.map(movie => (
            <div key={movie._id} className="watch-card">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster}`}
                alt={movie.title}
                loading="lazy"
              />
              <p className="watch-card-title">{movie.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}