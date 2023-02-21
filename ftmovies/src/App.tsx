import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MovieSearch } from "./components/MovieSearch";
import { Header } from "./components/Header";
import ResultContextProvider from "../src/context/ResultContextProvider";
import { Favorites } from "./components/Favorites";
import ResultContext from "../src/context/ResultContext";
import { Filters } from "./components/Filters";

function App() {
  return (
    <div className="App">
      <ResultContextProvider>
        <Header />
        <Filters />
        <Favorites />
        <MovieSearch />
      </ResultContextProvider>
    </div>
  );
}

export default App;
