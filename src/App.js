import { useState } from "react";
import { moviesData } from "./component/moviesData";
import MovieList from "./component/MovieList";
import "./Style.css";
import AddMovie from "./component/AddMovie";
import MovieCard from "./component/MovieCard";
import SearchMovie from "./component/SearchMovie";
import Navbar from "./component/Navbar";
export default function App() {
  const [moviesList, setMoviesList] = useState(moviesData);

  const addNewMovie = (newMovie) => {
    setMoviesList([...moviesList, newMovie]);
  };

  const [nameSearch, setNameSearch] = useState("");
  const [ratingSearch, setRatingSearch] = useState(0);
  const search = () => {
    let filteredMovies = moviesData.filter(
      (movie) =>
        movie.name.toLowerCase().includes(nameSearch.toLowerCase()) &&
        movie.rating >= ratingSearch
    );
    setMoviesList(filteredMovies);
  };
  return (
    <div className="wrapper">
      <Navbar/>
      <AddMovie addNewMovie={addNewMovie} />
      <MovieList moviesList={moviesList} />
      <SearchMovie setNameSearch={setNameSearch} setRatingSearch={setRatingSearch} search={search} />
    </div>
  );
}