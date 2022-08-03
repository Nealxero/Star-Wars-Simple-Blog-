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

export const Coruscant = () => {
    const [planetData, setPlanetData] = useState(null);
useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/9")
      .then((response) => response.json())
      .then((result) => setPlanetData(result.result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!planetData)
  return (
    <div style={textColor2}> {" "}<h1>Preparing Hyperspace</h1> </div>
     
  );

  return (
    <div className="card mb-3" style={textColor}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://i.pinimg.com/originals/cb/96/66/cb9666bbef16980cd8206879066e6950.jpg"
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
              <h2 className="card-text" style={PlanetInfo}>{`Diameter of the planet: ${planetData.properties.diameter} `}{" "}</h2>
              <h2 className="card-text" style={PlanetInfo}>{`Rotation period (hours of a day): ${planetData.properties.rotation_period}`}</h2>
              <h2 className="card-text" style={PlanetInfo}>{`Gravity: ${planetData.properties.gravity}`}</h2>
              <h2 className="card-text" style={PlanetInfo}>{`Population of the planet: ${planetData.properties.population} `}</h2>
              <h2 className="card-text" style={PlanetInfo}>{`Terrain of the planet: ${planetData.properties.terrain}`}</h2>
              <h2 className="card-text" style={PlanetInfo}>{`Surface of water: ${planetData.properties.surface_water}`}</h2>
              
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

