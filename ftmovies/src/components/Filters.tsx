import { FormEvent, useEffect, useState } from "react";
import Genres from "../models/Genres";
import getGenres from "../services/GetMovieData";
import "../css/Filter.css";

import { SearchForm } from "./SearchForm";
import { MovieList } from "./MovieList";
import { Result } from "../models/MovieLookup";

export default function Filters() {
  const [movieLists, setMovieLists] = useState<Result[]>([]);
  const [genres, setGenres] = useState<Genres[]>([]);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [votes, setVotes] = useState("");

  useEffect(() => {
    getGenres().then((response) => setGenres(response.genres));
  }, []);

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setMovieLists(movieLists);
  };

  return (
    <form className="Filters" onSubmit={onSubmit}>
      <>
        <label className="genre" htmlFor="genre"></label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          <>
            <option value={genre}>Genre</option>
            {genres.map((genre) => (
              <option key={genre.id} value={genre.id}>
                {genre.name}
              </option>
            ))}
          </>
        </select>
        <label htmlFor="year" className="year">
          Year:
        </label>
        <input
          type="number"
          id="year"
          value={year}
          min=""
          max="2023"
          onChange={(e) => setYear(e.target.value)}
        />
        <label htmlFor="votes" className="votes">
          Rating:{" "}
        </label>
        <input
          type="number"
          name="votes"
          id="votes"
          min="0"
          max="10"
          value={votes}
          onChange={(e) => setVotes(e.target.value)}
        />
      </>
    </form>
  );
}
