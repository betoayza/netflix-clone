import React, { useState } from "react";
import { MoviesList } from "../container/MoviesList";
import { Modal } from "../pure/Modal";

export const NavBar = () => {
  const [isModalActivated, setIsModalActivated] = useState(false);
  const [searchingText, setSearchingText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalActivated(true);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setSearchingText(e.target.value);
  };

  let searchForm = (
    <div className={"container m-2 w-auto"}>
      <form role="search" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="search"
          placeholder="Search..."
          value={searchingText}
          aria-label="Search"
          style={{ color: "#800080", fontStyle: "italic", fontWeight: "bold" }}
          onChange={handleChange}
        />
        <div
          className={"mt-2"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button type="submit" className="btn btn-primary">
            <i className="bi-search"></i>
          </button>
        </div>
      </form>
    </div>
  );

  // console.log(searchingText);

  return isModalActivated ? (
    <Modal>
      <MoviesList
        searchingText={searchingText}
        setSearchingText={setSearchingText}
        setIsModalActivated={setIsModalActivated}
      />
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
              {searchForm}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
