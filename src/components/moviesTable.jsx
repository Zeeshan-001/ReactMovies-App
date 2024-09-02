import React from "react";
import Like from "../components/common/like";
import Delete from "../components/common/delete";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
import { Link } from "react-router-dom";

const MoviesTable = ({ movies, onLike, onDelete, sortColumn, onSort }) => {
  const columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}> {movie.title} </Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like like={movie.like} onLike={() => onLike(movie._id)} />
      ),
    },
    {
      key: "delete",
      content: (movie) => <Delete onDelete={() => onDelete(movie._id)} />,
    },
  ];

  return (
    <table className="table mt-5">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TableBody data={movies} col={columns} />
    </table>
  );
};

export default MoviesTable;
