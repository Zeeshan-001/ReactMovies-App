const Like = ({ like, onLike }) => {
  const classes = like ? "bi bi-heart-fill" : "bi bi-heart";
  return (
    <div style={{ cursor: "pointer" }} onClick={() => onLike()}>
      <i className={classes}></i>
    </div>
  );
};

export default Like;
