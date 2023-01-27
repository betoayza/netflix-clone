import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MoviesList } from "../container/MoviesList";
import { Modal } from "../pure/Modal";

export const NavBar = () => {
  const [isModalActivated, setIsModalActivated] = useState(false);
  const [searchingText, setSearchingText] = useState("");

  const activeStyle = {
    textDecoration: "none",
    color: "#9400d3",
  };

  const inactiveStyle = {
    textDecoration: "none",
    color: "white",
  };

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
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : inactiveStyle)}
            className={"navbar-brand"}
          >
            <span style={{ fontWeight: "bold" }}>Netflix Clone</span>{" "}
          </NavLink>
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
                  <NavLink
                    to="/"
                    style={({ isActive }) =>
                      isActive ? activeStyle : inactiveStyle
                    }
                    className={"nav-link active"}
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="login"
                    style={({ isActive }) =>
                      isActive ? activeStyle : inactiveStyle
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="signup"
                    style={({ isActive }) =>
                      isActive ? activeStyle : inactiveStyle
                    }
                  >
                    SignUp
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    Movies
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <NavLink
                        to="/movies/trending"
                        style={({ isActive }) =>
                          isActive ? activeStyle : inactiveStyle
                        }
                      >
                        Trending
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/movies/popular"
                        style={({ isActive }) =>
                          isActive ? activeStyle : inactiveStyle
                        }
                      >
                        Popular
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/movies/recommended/weekly"
                        style={({ isActive }) =>
                          isActive ? activeStyle : inactiveStyle
                        }
                      >
                        Recommended
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/movies/watched/weekly"
                        style={({ isActive }) =>
                          isActive ? activeStyle : inactiveStyle
                        }
                      >
                        Watched
                      </NavLink>
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
