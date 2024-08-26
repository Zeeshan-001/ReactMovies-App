import React from "react";
import "./App.css";
import Movies from "./components/movies.jsx";
import Navbar from "./components/navbar.jsx";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main className="container">
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
