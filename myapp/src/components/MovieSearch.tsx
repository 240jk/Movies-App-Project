/* eslint-disable no-unused-expressions */
import { useEffect, useState } from "react";
import { Result } from "../model/MovieLookup";
import { GetMovieData } from "../services/GetMovieData";

export function MovieSearch() {
  const [movieSearch, setMovieSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Result[]>([]);

  useEffect(() => {
    GetMovieData(movieSearch).then((data) =>
      setSearchResults(data.data.results)
    );
  }, [movieSearch]);

  useEffect(() => {
    console.log(movieSearch);
  }, [movieSearch]);

  let searchResultDisplay = searchResults?.map((searchResult: Result) => (
    <form>
      <div>{searchResult.title}</div>
      <div>{searchResult.vote_average.toFixed(1)}</div>
      <div>{searchResult.overview}</div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${searchResult.poster_path}`}
        ></img>
      </div>
      <button>Submit</button>
      <br></br>
      <br></br>
    </form>
  ));

  return (
    <div className="MovieSearch">
      <input
        type="text"
        name="name"
        onChange={(e) => setMovieSearch(e.target.value)}
        value={movieSearch}
      />
      {searchResultDisplay}
    </div>
  );
}
