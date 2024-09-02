import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const Moive = () => {
  const params = useParams();

  return <h1>Movie: {params.id}</h1>;
};

export default Moive;
<h1>Movie: {this}</h1>;
