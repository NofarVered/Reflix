import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BiPlusCircle, BiMinusCircle } from 'react-icons/bi';

class Movie extends Component {
  toggleRented = () => {
    let amount = this.props.movie.isRented ? 3 : -3;
    let currentBudget = this.props.budget;

    if (currentBudget + amount < 0) {
      return alert('Insufficient Funds');
    }

    this.props.updateBudget(amount);
    this.props.toggleRented(this.props.movie.id);
  };

  render() {
    let movie = this.props.movie;
    return (
      <div
        className="movie"
        key={movie.id}
        style={{ backgroundImage: `url(${movie.img})` }}
      >
        <Link key={movie.id} to={`/movies/${movie.id}`}></Link>

        <p>{movie.title}</p>
        {movie.isRented ? (
          <BiMinusCircle onClick={this.toggleRented} />
        ) : (
          <BiPlusCircle onClick={this.toggleRented} />
        )}
      </div>
    );
  }
}

export default Movie;
