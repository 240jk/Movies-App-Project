import React, { useEffect, useState } from "react";
import { Result } from "../models/MovieLookup";
import { GetMovieData } from "../services/GetMovieData";
import "../css/SearchForm.css";

interface ISearchFormProps {
  UpdateMovies: Function;
}
export function SearchForm(props: ISearchFormProps) {
  const [movieLists, setMovieLists] = useState<string>("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const result = data.get("searchBarInput")?.toString() || "";
    console.log(movieLists);
    GetMovieData(movieLists).then((response) =>
      props.UpdateMovies(response.data.results)
    );
  };

  return (
    <div className="SearchForm">
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="searchBarInput"
          placeholder="Search movie here"
          id="searchBarInput"
          onChange={(e) => setMovieLists(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
