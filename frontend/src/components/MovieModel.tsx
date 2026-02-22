const MovieModal = ({ movie, onClose }: any) => {

  if (!movie) return null;

  return (
    <div className="modal">

      <div className="modal-content">

        <button onClick={onClose}>Close</button>

        <h2>{movie.title}</h2>

        <p>{movie.overview}</p>

      </div>

    </div>
  );
};

export default MovieModal;
