import MovieCard from "./MovieCard";
    const MovieList = ({ moviesList }) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap"
          }}
        >
          {moviesList.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      );
    };
    export default MovieList;
    