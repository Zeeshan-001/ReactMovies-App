const Delete = ({ onDelete }) => {
  return (
    <td>
      <button onClick={onDelete} type="button" className="btn btn-danger">
        Delete
      </button>
    </td>
  );
};

export default Delete;
