import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";
import { FavContext, FavProvider } from "../component/favContent";
import { useContext } from "react";
import { Context } from "../store/appContext";

// Fetching ALL the different data

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
/////////////////////////////////////////////////////////

//adding some styles
const scrollStyle = {
  display: "flex",
  overflowX: "scroll",
  padding: "5px",
};

const cardStyle = {
  background: "#222",
  border: "1px solid #dd2476",
  color: "rgba(250, 250, 250, 0.8)",
  marginLeft: "15px",
};
export const headerStyle = {
  textAlign: "center",
};
const buttonStyle = {
  float: "right",
};

///////////////////


const StarWarsCard = ({ name, uid, openCharacterInfo, path }) => {
  const { store, actions } = useContext(Context);
  const { favs, updateFavoriteList, isAlreadyFav } = useContext(FavContext);
  // console.log("Hello World", fav);  //  <button className="Button" style={buttonStyle} onClick={() => setFavs([...fav, {path, uid}])}>⭐</button> //
  /*⭐❌*/
  return (
    <div className="card" style={cardStyle}>
      <img
        className="card-top-img"
        src="https://picsum.photos/200/300"
        width="300"
      />
      <h5 className="card-title">{name}</h5>

      <button onClick={openCharacterInfo} className="Button">
        <Link to={`/${path}/${uid}/`}>More Info HERE!</Link>
      </button>
      <button
        className="Button"
        style={buttonStyle}
        onClick={() => {
          const newElement = { name, uid };
          const isFav = isAlreadyFav(newElement);

          if (isFav === undefined) {
            updateFavoriteList(newElement);
            actions.updateFavoriteList(newElement);
          }
        }}
      >
        {isAlreadyFav({ name, uid }) ? "❌" : "⭐"}
        
      </button>
    </div>
  );
};

const CardRows = ({ title, data, path }) => {
  return (
    <>
      <h1 style={headerStyle} href="">
        {title}
      </h1>
      ;
      <div style={scrollStyle}>
        {data.map((item) => (
          <div>
            <StarWarsCard
              key={item.name}
              path={path}
              name={item.name}
              uid={item.uid}
            />
          </div>
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

  if (!people || !planets || !starships) return <div> <h1 style={headerStyle}> PREPARING HYPERSPACE... </h1> </div>;

  return (
    <div>
      <CardRows title={"People"} data={people} path="people" />
      <hr />
      <CardRows title="Planets" data={planets} path="planets" />
      <hr />
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
  const { planet_id } = useParams();
  const [planetData, setPlanetData] = useState({});

  useEffect(() => {
    function fetchDataCallback() {
      return fetch(`https://www.swapi.tech/api/planets/${uid}`)
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
  }, [planet_id]);

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
