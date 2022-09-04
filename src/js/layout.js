import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { PlanetCards } from "./component/cardPlanets";
import { PeopleCards } from "./component/cardPeople";
import { ShipCards } from "./component/cardStarShips";
import { StarWars } from "./views/starWarsView";

import injectContext from "./store/appContext";

import { NavbarHead } from "./component/navbar";
import { Footer } from "./component/footer";
import { FavProvider } from "./component/favContent";
//create your first component

const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <FavProvider>
      <div>
        <BrowserRouter basename={basename}>
          <ScrollToTop>
            <NavbarHead />
            <Switch>
              <Route exact path="/">
                <StarWars />
              </Route>

              <Route exact path="/starships/:id">
                <ShipCards />
              </Route>
              <Route exact path="/people/:id">
                <PeopleCards />
              </Route>
              <Route exact path="/planets/:id">
                <PlanetCards />
              </Route>

              <Route>
                <h1>Not found!</h1>
              </Route>
            </Switch>
            <Footer />
          </ScrollToTop>
        </BrowserRouter>
      </div>
    </FavProvider>
  );
};

export default injectContext(Layout);
