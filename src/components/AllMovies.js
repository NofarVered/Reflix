import React, { Component } from 'react';
import '../css/catalog.css';

class AllMovies extends Component {
  render() {
    return (
      <div>
        <p>Catalog:</p>
        <div className="display all">
          {this.props.movies.map((m) => this.props.getMovieDisplay(m))}
        </div>
      </div>
    );
  }
}
export default AllMovies;
