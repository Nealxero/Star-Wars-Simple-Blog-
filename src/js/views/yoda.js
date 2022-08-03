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
  backgroundColor: "Green",
};

const textDescription = {
  fontSize: "20px",
  color: "white",
  margin: "auto",
};
export const Yoda = () => {
  const [yodaData, setYodaData] = useState(null);
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people/20")
      .then((response) => response.json())
      .then((result) => setYodaData(result.result))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/planets/28")
      .then((response) => response.json())
      .then((result) => setPlanetData(result.result))
      .catch((error) => console.log("error", error));
  }, []);

  if (!yodaData || !planetData)
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
            src="https://i.pinimg.com/originals/7e/7a/e6/7e7ae610983044f0ea8fce3ddde8de23.jpg"
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
              <h2 className="card-text" style={textColor}>{`Birth year:${yodaData.properties.birth_year} `}{" "} </h2>
              <h2 className="card-text" style={textColor}>{`He was born in:${planetData.properties.name} `}</h2>
              <h2 className="card-text" style={textColor}>{`Gender:${yodaData.properties.gender} `}</h2>
              <h2 className="card-text" style={textColor}>{`Skin Color:${yodaData.properties.skin_color} `}</h2>
              <h2 className="card-text" style={textColor}>{`Eyes Color:${yodaData.properties.eye_color} `}</h2>
              <h2 className="card-text" style={textColor}>{`Height: ${yodaData.properties.height}`}</h2>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};
