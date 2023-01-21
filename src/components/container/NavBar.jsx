import React, { useState, useEffect } from "react";
import { useGetMovies } from "../../hooks/useGetMovies";
import { Modal } from "../pure/Modal";
import { Movie } from "../pure/Movie";

export const NavBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [isModalActivated, setIsModalActivated] = useState(false);
  const [searchingText, setSearchingText] = useState("");
  let arrMovies;

  if (isSearching && isModalActivated) {
    arrMovies = useGetMovies(searchingText);
    console.log(arrMovies);
  }

  const handleChange = (e) => {
    console.log(e.target.value);
    e.target.value === ""
      ? (setIsSearching(false), setIsModalActivated(false))
      : (setIsSearching(true), setIsModalActivated(true));
    setSearchingText(e.target.value);
  };

  let searchInput = (
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search..."
      value={searchingText}
      aria-label="Search"
      style={{ color: "red" }}
      onChange={handleChange}
    />
  );
  

  return isModalActivated ? (
    <Modal>
      <div>
        {/* {searchInput} */}
        {/* {arrMovies.map((movie, index) => {
          return <Movie key={index} movie={movie} />;
        })} */}
      </div>
    </Modal>
  ) : (
    <div>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <span style={{ fontWeight: "bold" }}>Netflix Clone</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Netflix Clone
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/signup">
                    Sign Up
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Movies
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="/movies/trending">
                        Trending
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/movies/popular">
                        Popular
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/movies/recommended/weekly"
                      >
                        Recommended
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="/movies/watched/weekly"
                      >
                        Watched
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                {searchInput}
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
