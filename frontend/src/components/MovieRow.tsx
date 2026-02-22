import MovieCard from "./MovieCard";

const MovieRow = ({ title, movies }: any) => {

  return (
    <div>

      <h2>{title}</h2>

      <div className="movie-row">

        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}

      </div>

    </div>
  );
};

export default MovieRow;
