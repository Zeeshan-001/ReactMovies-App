import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../src/components/appRoutes.jsx";

function App() {
  return (
    <main className="container">
      <Router>
        <AppRoutes />
      </Router>
    </main>
  );
}

export default App;
