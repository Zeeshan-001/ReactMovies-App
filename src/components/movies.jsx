import React, { Component } from "react";
import Pagination from "./common/pagination";
import List from "./common/list";
import { paginate } from "../utils/paginate";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    pageSize: 5,
    genres: [],
    selectedGenre: "",
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre._id, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;

    // Filter Movies according to Genre
    const filteredMovies = selectedGenre
      ? allMovies.filter((m) => m.genre._id === selectedGenre)
      : allMovies;

    const count = filteredMovies.length;

    // Sorting Movies
    const sortMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path], // Title Should Same wie in Backend for Lodash
      [sortColumn.order] // Order asc or desc
    );

    const movies = paginate(sortMovies, currentPage, pageSize);

    return (
      <div className="moviesContainer">
        {/* Movies Genres List Container */}
        <div className="col-3">
          <List
            genres={genres}
            onItemSelect={this.handleGenreSelect}
            selectedGenre={selectedGenre}
          />
        </div>

        {/* MoviesMain Component */}
        <div className="col">
          <h4 className="mt-5">
            {count === 0
              ? "No movies available in the database."
              : `There are a total of ${count} movies in the database.`}
          </h4>

          {/* MoviesTable Component */}
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleMovies}
            sortColumn={sortColumn}
            onSort={this.handleSort}
          />

          {/* Pagination Component */}
          <Pagination
            itemCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
