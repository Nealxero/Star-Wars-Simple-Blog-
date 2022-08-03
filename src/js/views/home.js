/*import React, { useState } from "react";

import "../../styles/home.css";
import { Link } from "react-router-dom";

const cardStyle1 = {
  width: "10rem",
  margin: "10px",
  backgroundColor: "Red",
};
const cardStyle2 = {
  width: "10rem",
  margin: "10px",
  backgroundColor: "Blue",
};
const cardStyle3 = {
  width: "10rem",
  margin: "10px",
  backgroundColor: "Green",
};
const cardStylePlanets = {
  width: "15rem",
  margin: "10px",
  backgroundColor: "Brown",
};
const starshipStyles = {
  width: "15rem",
  margin: "10px",
  backgroundColor: "grey",
}
const buttonStyle = {
  float: "right",
};
const cargaInicial = () => {
  var auxHolder = fetchDataCallback();
  console.log(auxHolder);
};

cargaInicial();

const PeopleFetch = () => {
  const [peopleData, setpeopleData] = useState (null)
  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((response) => response.json())
      .then((result) => setpeopleData(result.result))
      .catch((error) => console.log("error", error));
  }, []);
}

export const Home = () => (
  <div>
    <h1 id="HomeHeader"> Characters </h1>
    <div className="container-fluid">
      <div className="card-group people " id="CharactersSW">
        <div className="card" style={cardStyle1}>
          <img
            src="https://i.pinimg.com/originals/bc/80/f5/bc80f5b374e492a81a6f96df7210cf64.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">A</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="/starWarsView">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
        <div className="card " style={cardStyle2}>
          <img
            src="https://i.pinimg.com/originals/32/8a/cd/328acd1add1b624dacc4bdb0d42fd74c.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Obi Wan Kenobi</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="/obiWan">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
        <div className="card" style={cardStyle2}>
          <img
            src="https://wallpapercave.com/wp/wp5505022.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Anakin Skywalker</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="/anakin">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
        <div className="card" style={cardStyle3}>
          <img
            src="https://i.pinimg.com/originals/ba/f3/49/baf349e419212b2c5316a9de742ef5d9.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Yoda</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="/yoda">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
      
      </div>
    </div>
    <div> {" "} 
    <h1 id="HomeHeader"> Planets </h1>
      <div className="card-group planets" id="PlanetssSW">
        <div className="card" style={cardStylePlanets}>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/dev18o2-7a23f26b-cd6d-4dee-83da-2eafe12c465e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2MThvMi03YTIzZjI2Yi1jZDZkLTRkZWUtODNkYS0yZWFmZTEyYzQ2NWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ulxDYLpXJR5KlK_1q6-XmKDgwaZb-M4M6wSaXW20e_w"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Tatooine</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="/tatooine">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
        <div className="card " style={cardStylePlanets}>
          <img
            src="https://64.media.tumblr.com/d129d6ca59820b8a07d30ad354b15386/71b16254e08dc133-28/s540x810/49a69cad38506ba07db05c75bbe3f0285807b9d1.pnj"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Stewjon</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="/stewjon">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
        <div className="card " style={cardStylePlanets}>
          <img
            src="https://i.pinimg.com/736x/b9/b3/cf/b9b3cff1cec18f75e19d4d4f9cf8cfb4.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Hoth</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="/hoth">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
        <div className="card " style={cardStylePlanets}>
          <img
            src="https://i.pinimg.com/originals/eb/7d/b3/eb7db301d602ab9a689308d574e2fa0e.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Coruscant</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="/coruscant">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
      </div>
    </div>
    <div> {" "} 
    <h1 id="HomeHeader"> Starships </h1>
      <div className="card-group planets" id="PlanetssSW">
        <div className="card" style={starshipStyles}>
          <img
            src="https://i.pinimg.com/originals/8c/bb/41/8cbb41d946782eaa27ff22e7da59136b.png"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Death Star</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="/deathStar">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
        <div className="card " style={starshipStyles}>
          <img
            src="https://i.pinimg.com/originals/19/4a/02/194a026e0f8cedd5a134a281d34718c9.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Executor</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="executor">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
        <div className="card " style={starshipStyles}>
          <img
            src="https://c4.wallpaperflare.com/wallpaper/517/933/283/millennium-falcon-star-wars-wallpaper-preview.jpg"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title">Millennium Falcon</h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="falcon">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
        <div className="card " style={starshipStyles}>
          <img
            src="https://w.wallha.com/ws/13/ItfG3172.png"
            className="card-img-top"
            alt="..."
          ></img>
          <div className="card-body">
            <h5 className="card-title"> X-Wing </h5>
            <p className="card-text"></p>
            <p className="card-text">
              Want to know more? Click on the button below!
            </p>
            <Link to="xwing">
              <p className="btn btn-dark">Learn More</p>
            </Link>
            <p className="btn btn-dark" style={buttonStyle}>
              🌌
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function fetchDataCallback() {
  return fetch("https://www.swapi.tech/api/people")
    .then((response) => {
      return response.json().then((response) => {
        console.log(response);
        return response;
      });
    })
    .catch((error) => {
      //error handling
      console.log(error);
    });
}*/
