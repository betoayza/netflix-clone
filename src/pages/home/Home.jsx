import React from "react";
import { Header } from "../../components/pure/Header";
import { MoviesTrending } from "../trending/MoviesTrending";

export const Home = () => {
  return (
    <div>
      <Header />
      <MoviesTrending />
    </div>
  );
};
