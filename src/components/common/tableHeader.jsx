import React from "react";

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const renderSortIcon = (column) => {
    if (column.path !== sortColumn.path) return null;

    // For Stock and Rate Nummric Sort
    if (column.path === "numberInStock" || column.path === "dailyRentalRate") {
      if (sortColumn.order === "asc")
        return <i className="bi bi-sort-numeric-up"></i>;
      if (sortColumn.order === "desc")
        return <i className="bi bi-sort-numeric-up-alt"></i>;
    }

    // For Title and Genre Alphabetish
    if (sortColumn.order === "asc")
      return <i className="bi bi-sort-alpha-down"></i>;
    if (sortColumn.order === "desc")
      return <i className="bi bi-sort-alpha-down-alt"></i>;
  };

  const raisSort = (path) => {
    let newSortCol = { ...sortColumn };
    if (newSortCol.path === path) {
      newSortCol.order = newSortCol.order === "asc" ? "desc" : "asc";
    } else {
      newSortCol = { path, order: "asc" };
    }
    onSort(newSortCol);
  };

  return (
    <thead>
      <tr>
        {columns.map((c) => (
          <th
            key={c.path || c.key}
            scope="col"
            onClick={() => raisSort(c.path)}
          >
            {c.label} {renderSortIcon(c)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
