import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { Result } from "./models/MovieLookup";
import { MovieCard } from "./components/MovieCard";

function App() {
  return (
    <div className="App">
      <Header />
      {/* Favorites */}
      <MovieList />
    </div>
  );
}

export default App;
