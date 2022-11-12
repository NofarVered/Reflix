import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <span className="logo">REFLIX</span>
      </div>
    );
  }
}
