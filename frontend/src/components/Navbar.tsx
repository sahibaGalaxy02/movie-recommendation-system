import { useState } from "react";
import { searchMovies, fetchMovieTrailer } from "../services/api";

const Navbar = () => {

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");

  // Handle search typing
  const handleSearch = async (e: any) => {

    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {

      const results = await searchMovies(value);
      setSuggestions(results);

    } else {

      setSuggestions([]);

    }

  };

  // Handle click on suggestion
  const handleSuggestionClick = async (movie: any) => {

    try {

      const trailer = await fetchMovieTrailer(movie.id);

      if (trailer) {

        setTrailerKey(trailer.key);
        setShowTrailer(true);

      } else {

        alert("Trailer not available");

      }

    } catch (error) {

      console.error(error);

    }

  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">

        <h2 className="logo">
          CineHub
        </h2>

        <div style={{ position: "relative" }}>

          {/* Search box */}
          <input
            type="text"
            placeholder="Search movies..."
            value={query}
            onChange={handleSearch}
            className="search-box"
          />

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="suggestions">

              {suggestions.map((movie) => (

                <div
                  key={movie.id}
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(movie)}
                >

                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                        : "https://via.placeholder.com/50"
                    }
                    alt={movie.title}
                  />

                  <span>{movie.title}</span>

                </div>

              ))}

            </div>
          )}

        </div>

      </div>

      {/* Trailer Modal */}
      {showTrailer && (

        <div className="modal">

          <div className="modal-content">

            <span
              className="close-btn"
              onClick={() => setShowTrailer(false)}
            >
              ✖
            </span>

            <iframe
              width="900"
              height="500"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allowFullScreen
            ></iframe>

          </div>

        </div>

      )}

    </>
  );

};

export default Navbar;
