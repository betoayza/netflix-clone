import { createBrowserRouter } from "react-router-dom";
import * as Components from "../index/indexComponents";
import "bootstrap-icons/font/bootstrap-icons.css";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Components.LayoutBase />,
    errorElement: <Components.Error404 />,
    children: [
      {
        index: true,
        element: <Components.Home />,
      },
      {
        path: "movies/trending",
        element: <Components.MoviesTrending />,
      },
      {
        path: "movies/recommended/weekly",
        element: <Components.MoviesRecommended />,
      },
      {
        path: "movies/popular",
        element: <Components.MoviesPopular />,
      },
      {
        path: "movies/:slug/:imdbID",
        element: <Components.MovieDescription />,
      },
      {
        path: "movies/watched/weekly",
        element: <Components.MoviesWatched />,
      },
      {
        path: "login",
        element: <Components.Login />,
      },
      {
        path: "signup",
        element: <Components.SignUp />,
      },
    ],
  },
]);
