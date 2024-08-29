import React from "react";
import _ from "lodash";

const TableBody = ({ data, col }) => {
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  return (
    <tbody>
      {data.map((movie, movieIndex) => (
        <tr key={movieIndex}>
          {col.map((c, columnIndex) => (
            <td key={columnIndex}>{renderCell(movie, c)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
