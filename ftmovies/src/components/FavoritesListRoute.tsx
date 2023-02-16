import { Movie } from '../models/movie';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import movieList from '../data/movielist';
import { BasicItem } from './Movie';

export function FavoritesList() {
    return (
      <div>
        <h1><Link to="/favorites">Favorites</Link></h1>
      </div>
    );
  }
  