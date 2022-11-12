import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/landing.css";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: "Sapir", color: "#6495ED" },
        { name: "Oriya", color: "#FF69B4" },
        { name: "Rani", color: "#F4A460" },
        { name: "Evyatar", color: "#66CDAA" },
      ],
    };
  }

  getUserDisplay(user) {
    return (
      <Link
        className="user"
        style={{ backgroundColor: user.color }}
        key={user.name}
        to="catalog"
      >
        {user.name}
      </Link>
    );
  }

  render() {
    return (
      <div className="landing-container">
        <p>Who's Watching?</p>
        <div className="users">
          {this.state.users.map((u) => {
            return this.getUserDisplay(u);
          })}
        </div>
      </div>
    );
  }
}

export default Landing;
