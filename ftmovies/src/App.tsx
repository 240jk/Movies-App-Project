import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { Result } from "./models/MovieLookup";
import { MovieCard } from "./components/MovieCard";
import ResultContextProvider from "../src/context/ResultContextProvider";
import { Favorites } from "./components/Favorites";
import ResultContext from "../src/context/ResultContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeListRoute from "./routing/HomeListRoute";
import FavoritesListRoute from "./routing/FavoritesListRoute";
import Navbar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <ResultContextProvider>

      </ResultContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
