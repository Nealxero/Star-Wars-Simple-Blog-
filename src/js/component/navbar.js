import React from "react";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FavContext, FavProvider } from "./favContent";
import { Context } from "../store/appContext";
import { Navbar, Nav, Image, DropdownButton, Dropdown, NavDropdown, Button } from "react-bootstrap";
import { headerStyle } from "../views/starWarsView";

export const NavbarHead = () => {
  const {fav, path} = useContext(FavContext)
  const { store, actions } = useContext(Context);

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

      
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"
          style={imgStyle}
        ></img>
      </Link>
      <div className="ml-auto mx-5">
        
      <NavDropdown  title="Favorites"  variant="secondary" menuVariant="dark" className="bg-dark">
        <h4 style={headerStyle}>Favorites List</h4>
        <div className="dropdown-divider"></div>
					{store.favorites.map((item, index, path, uid) => {


						return (
							<div key={index} className="d-flex justify-content-between">


								<NavDropdown.Item as={Link} to={`/${path}`}>
									{item.name}
								</NavDropdown.Item>

									<Button key={index}
									onClick={() => actions.deleteFavorite(index)}className="btn">X</Button>
							</div>
						)
					})}
				</NavDropdown>
      </div>
    </nav>
  );
};
