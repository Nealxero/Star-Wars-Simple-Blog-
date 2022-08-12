import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { headerStyle } from "../views/starWarsView";

export const InnerCardStyle = {
  background: "#222",
  border: "1px solid #dd2476",
  color: "rgba(250, 250, 250, 0.8)",
  width: "100%"
}

export const ShipCards = () => {
  const { id } = useParams();
  const [ships, setShips] = useState(null);
  

  useEffect(() => {
    function fetchShips() {
      return fetch(`https://www.swapi.tech/api/starships/${id}`)
        .then((response) => response.json())
        .then((response) => setShips(response.result))
        .catch((error) => {
          console.log(error);
        });
    }
    fetchShips();
  }, [id]);
  console.log(ships)

  if (!ships)
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
        <h1 className="card-title">{`${ships.properties.name}`}</h1>
        <h3 className="card-title">{`Model: ${ships.properties.model}`}</h3>
        <h3 className="card-title">{`Class: ${ships.properties.starship_class}`}</h3>
        <hr className="my-4"/>
        <p className="card-text">{`${ships.description} Made in ${ships.properties.manufacturer} with a cargo capacity of ${ships.properties.cargo_capacity} and a length of ${ships.properties.length}`}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>



};


