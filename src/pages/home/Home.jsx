import React from "react";
import { Header } from "../../components/pure/Header";
import { NavBar } from "../../components/pure/NavBar";
import { MoviesTrending } from "../trending/MoviesTrending";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <MoviesTrending />
    </div>
  );
};
