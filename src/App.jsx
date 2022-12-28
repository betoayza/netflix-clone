import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import * as Components from "./index/indexComponents";
import { NavBar } from "./components/pure/NavBar";

function App() {
  return (
    <div className="App h-auto">
      <NavBar />
      <br />
      <br />
      <br />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Components.Home />} />

          <Route
            exact
            path="/movies/trending"
            element={<Components.MoviesTrending />}
          />

          <Route
            exact
            path="/movies/popular"
            element={<Components.MoviesPopular />}
          />

          <Route
            exact
            path="/movies/recommended"
            element={<Components.MoviesRecommended />}
          />

          <Route
            exact
            path="/movies/:slug"
            element={<Components.MovieDescription />}
          />

          {/* <Route exact path="/about" element={<Components.About />} />

          <Route exact path="*" element={<Components.Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
