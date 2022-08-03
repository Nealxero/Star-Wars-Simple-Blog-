import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const imgStyle = {
    width: "150px",
    float: "left",
  };
  const navbarStyle = {
    padding: "0px",
    backgroundColor: "Black",
  };
  const dropdownStyle = {
    paddingRigth: "5px",
  };
  return (
    <nav className="navbar navbar-dark  mb-3" style={navbarStyle}>
      <Link to="/starWarsView">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
          style={imgStyle}
        ></img>
      </Link>
      <div className="ml-auto">
        <Link>
          <div className="dropdown">
            <button
              className="btn btn-dark bg-dark dropdown-toggle"
              type="button"
			  id="dropMenuButton"
              data-bs-toggle="dropdown"
			  aria-haspopup="true"
			  aria-expanded="false"
              style={dropdownStyle}
            >
              Favorites
			  <span className="badge badge-dark m-2"></span>
            </button>
				
          </div>
        </Link>
      </div>
    </nav>
  );
};
