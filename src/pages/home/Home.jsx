import React from "react";
import { Header } from "../../components/pure/Header";
import { MoviesTrending } from "../trending/MoviesTrending";

export const Home = () => {
  return (
    <div className={"h-auto"}>
      <Header />
      <MoviesTrending />
    </div>
  );
};
