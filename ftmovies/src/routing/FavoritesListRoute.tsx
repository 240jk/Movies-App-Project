import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Favorites } from '../components/Favorites';

function FavoritesListRoute() {
    return (
      <div>
        <h1 >Favorites</h1>
        <Favorites/>
      </div>
    );
  }
  export default FavoritesListRoute