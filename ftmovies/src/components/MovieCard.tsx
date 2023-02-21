import { Result } from "../models/MovieLookup";
import "../css/MovieCard.css";
import { useState } from "react";

interface IMovieCardProps {
  searchResult: Result;
}

export function MovieCard(props: IMovieCardProps) {
  //   const [searchResults, setSearchResults] = useState<Result[]>([]);

  return <div className="MovieCard">{props.searchResult.title}</div>;
}
