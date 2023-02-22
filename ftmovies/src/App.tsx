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
// import Navbar from "./components/NavBar";
import DetailsListRoute from "./routing/DetailsListRoute";
import { HomeListRoute } from "./routing/HomeListRoute";
import { FavoritesListRoute } from "./routing/FavoritesListRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResultContextProvider>
          <Header />
          <Routes>
            <Route path="/Home" element={<HomeListRoute />} />
            <Route path="/Favorites" element={<FavoritesListRoute />} />
            <Route path="/Details" element={<DetailsListRoute />} />
          </Routes>
          <MovieList />
        </ResultContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
