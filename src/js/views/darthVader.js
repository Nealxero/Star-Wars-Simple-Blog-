import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
const textColor = {
  color: "black",
  backgroundColor: "Crimson",
};
const textColor2 = {
  color: "white",
  widht: "50%,",
  justifyContent: "center",
};
const VaderInfo = {
  textAlign: "right",
};
const VaderDescription = {
  fontSize: "20px",
};
export const DarthVader = () => {
  const [darthData, setdarthData] = useState(null);
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/4")
      .then((response) => response.json())
      .then((result) => setdarthData(result.result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/1")
      .then((response) => response.json())
      .then((result) => setPlanetData(result.result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!darthData || !planetData)
    return (
      <div style={textColor2}>
        {" "}
        <h1>Preparing Hyperspace</h1>
      </div>
    );

  return (
    <div className="card mb-3" style={textColor}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://wallpaperaccess.com/full/2765517.jpg"
            className="img-fluid rounded-start"
            alt="..."
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{``}</h1>
            <p className="card-text" style={VaderDescription}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <footer>
              <h2 className="card-text" style={VaderInfo}>{`Birth year:${darthData.properties.birth_year} `}{" "}</h2>
              <h2 className="card-text" style={VaderInfo}>{`He was born in:${planetData.properties.name}`}</h2>
              <h2 className="card-text" style={VaderInfo}>{`Gender:${darthData.properties.gender} `}</h2>
              <h2 className="card-text" style={VaderInfo}>{`Skin Color: ${darthData.properties.skin_color}`}</h2>
              <h2 className="card-text" style={VaderInfo}>{`Eyes Color: ${darthData.properties.eye_color}`}</h2>
              <h2 className="card-text" style={VaderInfo}>{`Height: ${darthData.properties.height}`}</h2>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
