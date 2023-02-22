import { Result } from "../models/MovieLookup";
import "../css/MovieCard.css";
import { useState } from "react";


interface IMovieCardProps {
  MovieResult: Result;
}

export function MovieCard(props: IMovieCardProps) {
  return (
  
    <div className="MovieCards">
      <div className="MovieCard">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.MovieResult.poster_path}`}
          alt={props.MovieResult.title}
        />
        <div className="Card-Info">
          <h2>{props.MovieResult.title}</h2>
          <div className="Vote-Average">{props.MovieResult.vote_average.toFixed(1)}</div>
          <div>{props.MovieResult.overview}</div>
        </div>
      </div>
    </div>
  );
}
