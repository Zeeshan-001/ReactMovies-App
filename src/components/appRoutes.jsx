import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Navbar from "./navbar";
import Movies from "./movies";
import Customers from "./customers";
import Rentals from "./rentals";
import Moive from "./movie";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/movies", element: <Movies /> },
    { path: "/movies/:id", element: <Moive /> },
    { path: "/customers", element: <Customers /> },
    { path: "/rentals", element: <Rentals /> },
    { path: "*", element: <Navigate to="/movies" replace /> },
  ]);

  return (
    <>
      <Navbar />
      {routes}
    </>
  );
};

export default AppRoutes;
