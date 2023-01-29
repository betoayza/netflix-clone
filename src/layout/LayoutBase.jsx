import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/container/NavBar";

export const LayoutBase = () => {
  return (
    <div style={{ height: "auto" }}>
      <NavBar />
      <main className={"container"} style={{ marginTop: "70px" }}>
        <Outlet />
      </main>
      <footer className={"text-center fixed-bottom"} style={{ color: "white" }}>
        @ 2023 betoayza | Copyright
      </footer>
    </div>
  );
};
