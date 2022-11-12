import React, { Component } from "react";
import "../css/movie-detail.css";
// import { useParams } from "react-router-dom";

class MovieDetail extends Component {
  render() {
    // const { current } = useParams();
    let movie = this.props.movies.find((m) => {
      return m.id === "1";
    });

    return (
      <div>
        <div className="movie-detail">
          <h1>
            {movie.title} <span>({movie.year})</span>
          </h1>
          <img src={movie.img} alt="" />
          <p>{movie.descrShort}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
