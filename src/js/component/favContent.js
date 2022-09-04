import React from "react";
import { useContext, createContext } from "react";
import { useState } from "react";

export const FavContext = createContext("");
export const FavProvider = ({ children }) => {
  const [favs, setFavs] = useState([]);

  const updateFavoriteList = (newFavElement) =>
    setFavs((prev) => [...prev, newFavElement]);

  const isAlreadyFav = (currentFav) =>
    favs.find(
      (fav) => fav.uid === currentFav.uid && fav.name === currentFav.name
    );

  return (
    <FavContext.Provider value={{ favs, updateFavoriteList, isAlreadyFav }}>
      {children}
    </FavContext.Provider>
  );
};
