import React, { Component } from "react";
import Like from "../components/common/like";
import Delete from "../components/common/delete";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 5,
    currentPage: 1,
  };

  handleMovies = (id) => {
    const movies = this.state.movies.filter((m) => m._id !== id);
    this.setState({ movies: movies });
  };

  handleLike = (id) => {
    const movies = [...this.state.movies];
    const movie = movies.find((m) => m._id === id);
    movie.like = !movie.like;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { movies: allMovies, pageSize, currentPage } = this.state;
    const count = allMovies.length;

    const movies = paginate(allMovies, currentPage, pageSize);

    if (count === 0)
      return <p className="mt-5">No movies available in the database.</p>;

    return (
      <div className="moviesContainer">
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>

          <tbody>
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>

                <Like
                  like={movie.like}
                  onLike={() => this.handleLike(movie._id)}
                />

                <Delete onDelete={() => this.handleMovies(movie._id)} />
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination
          itemCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Movies;
