/* eslint-disable no-unused-expressions */
import { useContext, useEffect, useState } from "react";
import { Result } from "../models/MovieLookup";
import { GetMovieData } from "../services/GetMovieData";
import '../css/MovieSearch.css'
import { Favorites } from "./Favorites";
import OrderContext from "../context/ResultContext";
import ResultContext from "../context/ResultContext";

export interface IMovieSearchProps{
  result:Result;
  
}

export function MovieSearch(props:IMovieSearchProps) {
  const [movieSearch, setMovieSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Result[]>([]);

  let {result} = props;
  const { addResult, removeResult } = useContext(ResultContext);


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
        <button>h</button>
      </div>
      

      <br></br>
      <br></br>
    </form>
  ));

  return (
    <div className="MovieSearch">
      <input
        type="text"
        name="name"
        placeholder="Search movie here"
        onChange={(e) => setMovieSearch(e.target.value)}
        value={movieSearch}
        
      />
      {searchResultDisplay}
      
    </div>
  );
}
