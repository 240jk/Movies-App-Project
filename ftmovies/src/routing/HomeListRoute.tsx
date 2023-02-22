import * as React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/Header.css";

export function HomeListRoute () {
  return (
    <div id='home' className='headerStyle'>
    <Nav.Link className="homeLink" id='home' href="/home">Home</Nav.Link>
  </div>
  );
}
