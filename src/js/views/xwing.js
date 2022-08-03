import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

const textColor2 = {
  color: "white",
  widht: "50%,",
  justifyContent: "center",
};
const PlanetDescription = {
  fontSize: "20px",
};
const textColor = {
  color: "black",
  backgroundColor: "Crimson",
};
const PlanetInfo = {
  textAlign: "right",
};

export const Xwing = () => {
    const [shipData, setShipData] = useState(null);
useEffect(() => {
    fetch("https://www.swapi.tech/api/starships/12")
      .then((response) => response.json())
      .then((result) => setShipData(result.result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!shipData)
  return (
    <div style={textColor2}> {" "}<h1>Preparing Hyperspace</h1> </div>
     
  );

  return (
    <div className="card mb-3" style={textColor}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="http://cdn.miscellaneoushi.com/1280x1024/20121019/star%20wars%20death%20star%20xwing%20tie%20fighters%201280x1024%20wallpaper_www.miscellaneoushi.com_24.jpg"
            className="img-fluid rounded-start"
            alt="..."
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{``}</h1>
            <p className="card-text" style={PlanetDescription}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <footer>
              <h2 className="card-text" style={PlanetInfo}>{`Model: ${shipData.properties.model} `}{" "}</h2>
              <h2 className="card-text" style={PlanetInfo}>{`Starship Class: ${shipData.properties.starship_class}`}</h2>
              <h2 className="card-text" style={PlanetInfo}>{`Crew members: ${shipData.properties.crew}`}</h2>
              <h2 className="card-text" style={PlanetInfo}>{`Consumables: ${shipData.properties.consumables} `}</h2>
              <h2 className="card-text" style={PlanetInfo}>{`Length of the ship: ${shipData.properties.length}`}</h2>
              <h2 className="card-text" style={PlanetInfo}>{`Cargo Capacity: ${shipData.properties.cargo_capacity}`}</h2>
              
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};



