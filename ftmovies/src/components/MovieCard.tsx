import { Result } from "../models/MovieLookup";
import "../css/MovieCard.css";
import { useState } from "react";

interface IMovieCardProps {
  searchResult: Result;
}

export function MovieCard(props: IMovieCardProps) {
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  let searchResultDisplay = searchResults?.map((searchResult: Result) => (
    <section>
      <div>{searchResult.title}</div>
      <div>{searchResult.vote_average.toFixed(1)}</div>
      <div>{searchResult.overview}</div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${searchResult.poster_path}`}
        ></img>
      </div>
      <button className="Watchlist-Btn">Add to Watchlist</button>
      <br></br>
      <br></br>
    </section>
  ));
  return <div className="MovieCard">{searchResultDisplay}</div>;
}
