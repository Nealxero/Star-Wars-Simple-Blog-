import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
const textColor = {
  color: "white",
  widht: "50%,",
  margin: "auto",
  textAlign: "right",
};
const CardBody = {
  backgroundColor: "DarkBlue",
};

const textDescription = {
  fontSize: "20px",
  color: "white",
  margin: "auto",
};
export const ObiWan = () => {
  const [obiData, setObiData] = useState(null);
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/10")
      .then((response) => response.json())
      .then((result) => setObiData(result.result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/20")
      .then((response) => response.json())
      .then((result) => setPlanetData(result.result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!obiData || !planetData)
    return (
      <div style={textColor}>
        {" "}
        <h2>Preparing Hyperspace...</h2>
      </div>
    );

  return (
    <div className="card mb-3" style={CardBody}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://aiptcomics.com/wp-content/uploads/2022/05/obi-wan-kenobi-1-cover.jpeg"
            className="img-fluid rounded-start"
            alt="..."
          ></img>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{``}</h1>
            <p className="card-text" style={textDescription}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <footer>
              <h2 className="card-text" style={textColor}>{`Birth year:${obiData.properties.birth_year} `}{" "} </h2>
              <h2 className="card-text" style={textColor}>{`He was born in:${planetData.properties.name} `}</h2>
              <h2 className="card-text" style={textColor}>{`Gender:${obiData.properties.gender} `}</h2>
              <h2 className="card-text" style={textColor}>{`Skin Color:${obiData.properties.skin_color} `}</h2>
              <h2 className="card-text" style={textColor}>{`Eyes Color:${obiData.properties.eye_color} `}</h2>
              <h2 className="card-text" style={textColor}>{`Height: ${obiData.properties.height}`}</h2>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
