import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MovieSearch } from "./components/MovieSearch";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MovieSearch />
    </div>
  );
}

export default App;
