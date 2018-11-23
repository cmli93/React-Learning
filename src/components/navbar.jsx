import React, { Component } from "react";

//stateless functional component
//const NavBar = props => {
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* {props.totalCounters} */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
