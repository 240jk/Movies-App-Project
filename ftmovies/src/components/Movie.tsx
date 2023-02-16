import * as React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from '../models/movie';

interface IBasicItemProps {
    movie: Movie
  }


  export function BasicItem (props:IBasicItemProps) {
    return (
      <div>
        <h2>{props.movie.Genre}</h2>
        <ul>
            <li>{props.movie.ReleaseDate}</li>
        </ul>
        <Link to={"/details"}>
          Details
        </Link>
      </div>
    );
  }