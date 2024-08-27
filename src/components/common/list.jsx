import React from "react";

const List = ({ genres, onItemSelect, selectedGenre }) => {
  return (
    <ul className="list-group">
      {genres.map((g) => (
        <li
          key={g._id}
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(g)}
          className={
            selectedGenre === g._id
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {g.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
