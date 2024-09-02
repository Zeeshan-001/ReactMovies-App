import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar navbar-expand-md navbar-dark bg-dark fixed-top p-2">
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            {/* Main Page */}
            <li className="nav-item active">
              <Link className="nav-link" to="/movies">
                Movies <span className="sr-only">(current)</span>
              </Link>
            </li>
            {/* Customers */}
            <li className="nav-item">
              <Link className="nav-link" to="/customers">
                Customers
              </Link>
            </li>

            {/* Rentals */}
            <li className="nav-item">
              <Link className="nav-link" to="/rentals">
                Rentals
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
