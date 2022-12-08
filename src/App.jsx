import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Components from "./components/indexComponents";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <div
      className="App h-auto"     
    >
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Components.NetflixClone />} />

          <Route
            exact
            path="/movies/trending"
            element={<Components.MoviesTrending />}
          />

          {/* <Route
            exact
            path="/movies/popular"
            element={<Components.MoviesPopular />}
          />

          <Route exact path="/about" element={<Components.About />} />

          <Route exact path="*" element={<Components.Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
