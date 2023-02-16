import { Movie } from '../models/movie';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import movieList from '../data/movielist';
import { BasicItem } from './Movie';


export function HomeRoute (){
    const [movies] = useState<Movie[]>(movieList);
    return (
      <div>
        { movies.map((movie) => <BasicItem movie={movie} />) }
      </div>
    );
}