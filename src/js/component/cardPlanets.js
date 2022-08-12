import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { InnerCardStyle } from "./cardStarShips";
import { headerStyle } from "../views/starWarsView";


export const PlanetCards = () => {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null);

  useEffect(() => {
    function fetchPlanets() {
      return fetch(`https://www.swapi.tech/api/planets/${id}`)
        .then((response) => response.json())
        .then((response) => setPlanet(response.result))
        .catch((error) => {
          console.log(error);
        });
    }
    fetchPlanets();
  }, [id]);
console.log(planet)
  if (!planet)
    return (
      <>
        <h1 style={headerStyle}> PREPARING HYPERSPACE... </h1>
      </>
    );

  return <div className="card mb-3" style={InnerCardStyle}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_Blank.svg/2560px-Flag_Blank.svg.png" className="img-fluid rounded-start" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">{`${planet.properties.name}`}</h1>
        <h3 className="card-title">{`Diameter: ${planet.properties.diameter}`}</h3>
        <h3 className="card-title">{`Gravity: ${planet.properties.gravity}`}</h3>
        <hr className="my-4"/>
        <p className="card-text">{`${planet.description} with a population of ${planet.properties.population} with a ${planet.properties.terrain} terrain and a water surface of ${planet.properties.surface_water}`}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
};
