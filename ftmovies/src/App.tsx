import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MovieSearch } from "./components/MovieSearch";
import { Header } from "./components/Header";
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
      <Header />
      <Favorites/>
      <MovieSearch  />
      <Routes>
      <Route path="/Home" element={<HomeListRoute />} />
      <Route path="/Favorites" element={<FavoritesListRoute />} />
        {/* <Route path="/Favorites" element = {<FavoritesListRoute/>}>

          </Route>

          <Route path="/Details">
          
          </Route> */}
      </Routes>
      </ResultContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
