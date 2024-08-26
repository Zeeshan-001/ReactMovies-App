const Like = ({ like, onLike }) => {
  const classes = like ? "bi bi-heart-fill" : "bi bi-heart";
  return (
    <td style={{ cursor: "pointer" }} onClick={() => onLike()}>
      <i className={classes}></i>
    </td>
  );
};

export default Like;
