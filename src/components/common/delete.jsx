const Delete = ({ onDelete }) => {
  return (
    <button onClick={onDelete} type="button" className="btn btn-danger">
      Delete
    </button>
  );
};

export default Delete;
