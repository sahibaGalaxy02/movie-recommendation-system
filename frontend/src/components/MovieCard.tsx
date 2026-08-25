import { useState } from "react";
import { fetchMovieTrailer } from "../services/api";
import { saveMovie } from "../services/favoriteApi";

export default function MovieCard({ movie }: any) {
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const [saved, setSaved] = useState(false);

  const handleTrailer = async () => {
    const trailer = await fetchMovieTrailer(movie.id);
    if (trailer) {
      setTrailerKey(trailer.key);
      setShowTrailer(true);
    }
  };

  const handleSave = async () => {
    await saveMovie({
      movieId: movie.id,
      title: movie.title,
      poster: movie.poster_path,
      status: "saved",
    });
    setSaved(true);
  };

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster-wrap">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
            loading="lazy"
          />
          {movie.vote_average && (
            <span className="movie-rating">★ {movie.vote_average.toFixed(1)}</span>
          )}
          <div className="movie-overlay">
            <div className="movie-btn-row">
              <button className="movie-btn movie-btn-trailer" onClick={handleTrailer}>
                <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
                  <path d="M1 1.5L9 6L1 10.5V1.5Z" fill="white" />
                </svg>
                Trailer
              </button>
              <button
                className={`movie-btn movie-btn-save ${saved ? "saved" : ""}`}
                onClick={handleSave}
              >
                <svg width="11" height="13" viewBox="0 0 11 13" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
                  <path d="M1 1h9v11l-4.5-3L1 12V1z" />
                </svg>
                {saved ? "Saved" : "Save"}
              </button>
            </div>
          </div>
        </div>

        <div className="movie-body">
          {movie.genre && <p className="movie-genre">{movie.genre}</p>}
          <h4 className="movie-title">{movie.title}</h4>
          {movie.release_date && (
            <p className="movie-meta">{movie.release_date.slice(0, 4)}</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {showTrailer && (
        <div
          className="trailer-modal-bg"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowTrailer(false);
              setTrailerKey("");
            }
          }}
        >
          <div className="trailer-modal-box">
            <div className="trailer-modal-header">
              <span className="trailer-modal-title">{movie.title}</span>
              <button
                className="trailer-modal-close"
                onClick={() => { setShowTrailer(false); setTrailerKey(""); }}
              >
                ✕
              </button>
            </div>

            <div className="trailer-modal-video">
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>

          </div>
        </div>
      )}
    </>
  );
}