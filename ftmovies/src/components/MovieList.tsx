import * as React from "react";
import { useState, FormEvent } from "react";

import { Result } from "../models/MovieLookup";
import { MovieCard } from "./MovieCard";
import { SearchForm } from "./SearchForm";

export function MovieList() {
  const [movieLists, setMovieLists] = useState<Result[]>([]);
  //TO DO write a callback function to end to the child search form

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setMovieLists(movieLists);
  };
  //callback function
  function UpdateMovies(movielist: Result) {
    setMovieLists([movielist]);
  }
  //callback function also added line 24

  return (
    <div className="MovieList" onSubmit={(e) => onSubmit(e)}>
      <SearchForm UpdateMovies={setMovieLists} />
      <ul>
        {movieLists.map((movie) => (
          <MovieCard MovieResult={movie} />
        ))}
      </ul>
    </div>
  );
}
