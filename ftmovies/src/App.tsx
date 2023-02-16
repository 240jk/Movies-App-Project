import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';

import { HomeRoute } from './components/HomeRoute';
import { FavoritesList } from './components/FavoritesListRoute';
import { DetailsRoute } from './components/DetailsRoute';


// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <div>
    <BrowserRouter>
   <NavBar/>
 
    
    <Routes>
    <Route path="/home" element={<HomeRoute />} />
    <Route path="/favorites" element={<FavoritesList />} />
    <Route path="/details" element={<DetailsRoute />} />
    </Routes>
    </BrowserRouter>
 
  </div>
   
  );
}

export default App;
