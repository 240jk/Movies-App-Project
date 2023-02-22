import { FormEvent, useEffect, useState } from "react";
import Genres from "../models/Genres";
import getGenres from "../services/GetMovieData";

export default function Filters() {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [votes, setVotes] = useState("");

  const filterSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const discover: any = {
      ...(genre ? { with_genres: genre } : {}),
      ...(year ? { primary_release_year: year } : {}),
      ...(votes ? { "vote_average.gte": votes } : {}),
    };
    console.log(discover);
  };

  useEffect(() => {
    getGenres().then((response) => setGenres(response.genres));
  }, []);

  return (
    <form className="Filters" onSubmit={(e) => {}}>
      <>
        <label htmlFor="genre"></label>
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
