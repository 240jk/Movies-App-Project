import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function FavoritesListRoute () {
  return (
    <div id='favorites'>
    <Nav.Link id='favorites' href="/favorites">Favorites</Nav.Link>
  </div>
  );
}
