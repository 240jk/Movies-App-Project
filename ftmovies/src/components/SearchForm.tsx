import React, { useEffect, useState } from "react";
import { Result } from "../models/MovieLookup";
import { GetMovieData } from "../services/GetMovieData";
import "../css/MovieSearch.css";

interface ISearchFormProps {
  UpdateMovies: Function;
}
export function SearchForm(props: ISearchFormProps) {
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const [movieLists, setMovieLists] = useState<string>("");

  const onSubmit = (e: any) => {
    props.UpdateMovies({ movieLists: movieLists });
    e.preventDefault();
    const data = new FormData(e.target);
    const result = data.get("searchBarInput")?.toString() || "";
    GetMovieData(movieLists).then((response) =>
      setSearchResults(response.data.results)
    );

    setMovieLists(result);
  };

  //   let searchResultDisplay = searchResults?.map((searchResult: Result) => (
  //     <section>
  //       <div>{searchResult.title}</div>
  //       <div>{searchResult.vote_average.toFixed(1)}</div>
  //       <div>{searchResult.overview}</div>
  //       <div>
  //         <img
  //           src={`https://image.tmdb.org/t/p/w500/${searchResult.poster_path}`}
  //         ></img>
  //       </div>
  //       <button className="Watchlist-Btn">Add to Watchlist</button>
  //       <br></br>
  //       <br></br>
  //     </section>
  //   ));

  return (
    <div className="SearchForm">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="searchBarInput"
          placeholder="Search movie here"
          id="searchBarInput"
        />
        <button onSubmit={(e) => onSubmit} type="submit">
          Submit
        </button>
      </form>
      {/* {searchResultDisplay} */}
    </div>
  );
}
