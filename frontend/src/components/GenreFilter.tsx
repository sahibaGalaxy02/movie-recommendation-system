type Props = {
  onSelect: (id: number) => void;
};

const genres = [
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 18, name: "Drama" },
];

const GenreFilter = ({ onSelect }: Props) => {
  return (
    <div className="genre">

      {genres.map((g) => (
        <button key={g.id} onClick={() => onSelect(g.id)}>
          {g.name}
        </button>
      ))}

    </div>
  );
};

export default GenreFilter;
