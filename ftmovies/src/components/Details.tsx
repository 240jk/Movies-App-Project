import { Result } from "../models/MovieLookup";

interface IDetailsProps {
  MovieDetails: Result;
}

export function Details(props: IDetailsProps) {
  return (
    <div className="Details">
      <div>{props.MovieDetails.title}</div>
      <div>{props.MovieDetails.vote_average}</div>
      <div>{props.MovieDetails.overview}</div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.MovieDetails.poster_path}`}
        alt={props.MovieDetails.title}
      />
    </div>
  );
}
