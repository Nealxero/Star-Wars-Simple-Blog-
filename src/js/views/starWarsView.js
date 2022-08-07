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

function fetchStarships() {
    return fetch("https://www.swapi.tech/api/starships")
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

const scrollStyle = {
    display: "flex",
    overflowX: "scroll",
    
};
const cardStyle = {
  
    marginLeft:"15px"
}
const headerStyle = {
    textAlign: "center"
}
const StarWarsCard = ({ name, uid, openCharacterInfo, path }) => {
  return (
    <div className="card" style={cardStyle}>
      <img className="card-top-img"src="https://picsum.photos/200/300" width="300" />
      <h5 className="card-title">{name}</h5>
      
      <button onClick={openCharacterInfo}>
        <Link to={`/${path}/${uid}/`}>AAAAAAAA</Link>
      </button>
    </div>
  );
};

const CardRows = ({ title, data, path }) => {
  return (<>
      <h1 style={headerStyle}>{title}</h1>;
      <div style={scrollStyle}>
      {data.map((item) => (
        <div >
        <StarWarsCard
          key={item.name}
          path={path}
          name={item.name}
          uid={item.uid}
          openCharacterInfo={() => alert(item.name)}
        /></div>
      ))}
   </div>
    </>
  );
};

export const StarWars = () => {
  const [people, setPeople] = useState(null);

  const [planets, setPlanets] = useState(null);

  const [starships, setStarShips] = useState(null);

  

  useEffect(() => {
    fetchDataCallback().then((peopleRes) => setPeople(peopleRes.results));
    fetchPlanets().then((planetsRes) => setPlanets(planetsRes.results));
    fetchStarships().then((shipsRes) => setStarShips(shipsRes.results));

  }, []);

  if (!people || !planets || !starships ) return <div>Loading ...</div>;

  return (
    <div>
      <CardRows title={"People"} data={people} path="people" />
      <hr />
      <CardRows title="Planets" data={planets} path="planets" />
      <hr/>
      <CardRows title="Starships" data={starships} path="starships" />
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
  const [planetData, setPlanetData] = useState({});

  useEffect(() => {
    function fetchDataCallback() {
      return fetch(`https://www.swapi.tech/api/planets/${id}`)
        .then((response) => {
          return response.json().then((response) => {
            return setPlanetData(response.result);
          });
        })
        .catch((error) => {
          //error handling
          console.log(error);
        });
    }

    fetchDataCallback();
  }, [id]);

  console.log(planetData);
  return null;
};

export const StarshipDetails = () => {
    const { id } = useParams();
    const [shipData, setShipData] = useState({});
  
    useEffect(() => {
      function fetchDataCallback() {
        return fetch(`https://www.swapi.tech/api/starships/${id}`)
          .then((response) => {
            return response.json().then((response) => {
              return setShipData(response.result);
            });
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
      }
  
      fetchDataCallback();
    }, [id]);
  
    console.log(shipData);
    return null;
  };
  

