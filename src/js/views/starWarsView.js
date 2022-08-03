import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardInfoPeople } from "../component/cardInfoPeople";

function fetchDataCallback() {
  return fetch("https://www.swapi.tech/api/people")
    .then((response) => {
      return response.json().then((response) => {
        return response;
      });
    })
    .catch((error) => {
      //error handling
      console.log(error);
    });
}

function fetchPlanets() {
  return fetch("https://www.swapi.tech/api/planets")
    .then((response) => {
      return response.json().then((response) => {
        return response;
      });
    })
    .catch((error) => {
      //error handling
      console.log(error);
    });
}

/* function fetchSpecificData(url) {
  return fetch(url)
    .then((response) => {
      return response.json().then((response) => {
        return response;
      });
    })
    .catch((error) => {
      //error handling
      console.log(error);
    });
}*/

const cardStyle = {
    display: "flex",
    overflowX: "scroll",
    margin: "auto",
}
const StarWarsCard = ({ name, uid, openCharacterInfo, path }) => {
  return (
    <div className="card" >
      <img className="card-top-img"src="https://picsum.photos/200/300" width="200" />
      <h5 className="card-title">{name}</h5>
      
      <button onClick={openCharacterInfo}>
        <Link to={`/${path}/${uid}/`}>More info</Link>
      </button>
    </div>
  );
};

const CardRows = ({ title, data, path }) => {
  return (
    <div style={cardStyle}>
      <h1>{title}</h1>;
      {data.map((item) => (
        <div >
        <StarWarsCard
          key={item.name}
          path={path}
          name={item.name}
          uid={item.uid}
          openCharacterInfo={() => <CardInfoPeople/>}
        /></div>
      ))}
    </div>
  );
};

export const StarWars = () => {
  const [people, setPeople] = useState(null);

  const [planets, setPlanets] = useState(null);

  useEffect(() => {
    fetchDataCallback().then((peopleRes) => setPeople(peopleRes.results));
    fetchPlanets().then((planetsRes) => setPlanets(planetsRes.results));
  }, []);

  if (!people || !planets) return <div>Loading ...</div>;

  return (
    <div>
      <CardRows title={"People"} data={people} path="people" />
      <hr />
      <CardRows title="Planets" data={planets} path="planets" />
    </div>
  );
};

export const PeopleDetail = () => {
  const { id } = useParams();
  const [personData, setPersonData] = useState({});

  useEffect(() => {
    function fetchDataCallback() {
      return fetch(`https://www.swapi.tech/api/people/${id}`)
        .then((response) => {
          return response.json().then((response) => {
            return setPersonData(response.result);
          });
        })
        .catch((error) => {
          //error handling
          console.log(error);
        });
    }

    fetchDataCallback();
  }, [id]);

  console.log(personData);
  return null;
};

export const PlanetsDetails = () => {
  const { id } = useParams();
  const [personData, setPersonData] = useState({});

  useEffect(() => {
    function fetchDataCallback() {
      return fetch(`https://www.swapi.tech/api/planets/${id}`)
        .then((response) => {
          return response.json().then((response) => {
            return setPersonData(response.result);
          });
        })
        .catch((error) => {
          //error handling
          console.log(error);
        });
    }

    fetchDataCallback();
  }, [id]);

  console.log(personData);
  return null;
};
