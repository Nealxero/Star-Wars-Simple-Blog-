import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { InnerCardStyle } from "./cardStarShips";
import { headerStyle } from "../views/starWarsView";
import { FavContext } from "./favContent";
import { useContext } from "react";


export const PeopleCards = () => {
  const { id } = useParams();
  const [people, setPeople] = useState(null);
  

  useEffect(() => {
    function fetchPeople() {
      return fetch(`https://www.swapi.tech/api/people/${id}`)
        .then((response) => response.json())
        .then((response) => setPeople(response.result))
        .catch((error) => {
          console.log(error);
        });
    }

    fetchPeople();
  }, [id]);
  console.log(people);
  if (!people)
    return (
      <>
        <h1 style={headerStyle}> PREPARING HYPERSPACE... </h1>
      </>
    );

  return (
    <div className="card mb-3" style={InnerCardStyle}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_Blank.svg/2560px-Flag_Blank.svg.png" className="img-fluid rounded-start" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">{`${people.properties.name}`}</h1>
        <h3 className="card-title">{`Birth Year ${people.properties.birth_year}`}</h3>
        <h3 className="card-title">{`gender: ${people.properties.gender}`}</h3>
        <hr className="my-4"/>
        <p className="card-text">{`${people.description} with ${people.properties.eye_color} eyes, with ${people.properties.hair_color} hair and ${people.properties.height}M of height`}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
  );
};
