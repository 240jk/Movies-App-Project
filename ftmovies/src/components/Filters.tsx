import { useState } from "react";
import { GetMovieData } from "../services/GetMovieData";

export function Filters() {
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [votes, setVotes] = useState("");
  return (
    <form className="Filters" onSubmit={(e) => {}}>
      <div>
        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <label htmlFor="year" className="year">
          Year:
        </label>
        <input
          type="number"
          id="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <label htmlFor="votes" className="votes">
          Rating:{" "}
        </label>
        <input
          type="number"
          name="votes"
          id="votes"
          value={votes}
          onChange={(e) => setVotes(e.target.value)}
        />
      </div>
    </form>
  );
}
