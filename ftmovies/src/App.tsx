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
import { Details } from "./components/Details";

function App() {
  return (
    <div className="App">
      <ResultContextProvider>
        <Header />
        {/* Favorites */}
        <MovieList />
        <Favorites />
      </ResultContextProvider>
    </div>
  );
}

export default App;
