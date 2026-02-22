import { useState } from "react";
import { fetchMovieTrailer } from "../services/api";

interface MovieCardProps {
  movie: any;
}

const MovieCard = ({ movie }: MovieCardProps) => {

  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  // Handle click to open trailer
  const handleClick = async () => {
    try {
      const trailer = await fetchMovieTrailer(movie.id);

      if (trailer) {
        setTrailerKey(trailer.key);
        setShowTrailer(true);
      } else {
        alert("Trailer not available");
      }

    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  return (
    <>
      {/* Movie Card */}
      <div className="movie-card" onClick={handleClick}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          alt={movie.title}
          className="movie-poster"
        />

        <p className="movie-title">{movie.title}</p>
      </div>

      {/* Trailer Modal */}
      {showTrailer && (
        <div className="modal">
          <div className="modal-content">

            {/* Close Button */}
            <span
              className="close-btn"
              onClick={() => setShowTrailer(false)}
            >
              ✖
            </span>

            {/* YouTube Trailer */}
            <iframe
              width="900"
              height="500"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              title="Movie Trailer"
              allowFullScreen
            ></iframe>

          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;
