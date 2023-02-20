import { Result } from "../models/MovieLookup";
import "../css/MovieCard.css";

interface IMovieCardProps {
  MovieResult: Result;
}

export function MovieCard(props: IMovieCardProps) {
  return (
    <div className="MovieCard">
      <div>{props.MovieResult.title}</div>
      <div>{props.MovieResult.vote_average.toFixed(1)}</div>
      <div>{props.MovieResult.overview}</div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.MovieResult.poster_path}`}
        alt={props.MovieResult.title}
      />
    </div>
  );
}
