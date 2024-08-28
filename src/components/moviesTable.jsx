import React from "react";
import Like from "../components/common/like";
import Delete from "../components/common/delete";

const MoviesTable = ({ movies, onLike, onDelete, sortColumn, onSort }) => {
  const reisSort = (path) => {
    let newSortCol = { ...sortColumn };

    if (newSortCol.path === path) {
      newSortCol.order = newSortCol.order === "asc" ? "desc" : "asc";
    } else {
      newSortCol = { path, order: "asc" };
    }

    onSort(newSortCol);
  };
  // 19
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col" onClick={() => reisSort("title")}>
            Title
          </th>
          <th scope="col" onClick={() => reisSort("genre.name")}>
            Genre
          </th>
          <th scope="col" onClick={() => reisSort("numberInStock")}>
            Stock
          </th>
          <th scope="col" onClick={() => reisSort("dailyRentalRate")}>
            Rate
          </th>
        </tr>
      </thead>

      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>

            <Like like={movie.like} onLike={() => onLike(movie._id)} />
            <Delete onDelete={() => onDelete(movie._id)} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
