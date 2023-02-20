import * as React from "react";
import { useState, FormEvent } from "react";
import { Result } from "../models/MovieLookup";
import { MovieCard } from "./MovieCard";

export function MovieList() {
  const [movieList, setMovieList] = useState<Result[]>([]);
  //TO DO write a callback function to end to the child search form

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setMovieList(movieList);
  };

  return (
    <div className="MovieList" onSubmit={(e) => onSubmit(e)}>
      <ul>
        {movieList.map((movie) => (
          <MovieCard MovieResult={movie} />
        ))}
      </ul>
    </div>
  );
}
