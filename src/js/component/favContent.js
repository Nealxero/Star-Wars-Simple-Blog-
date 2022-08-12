import React from "react";
import { useContext,createContext } from "react";

export const FavContext = createContext(null)
export const FavProvider = ({children}) => {
    const [favs, setFavs] = useState([])
    return <FavContext.Provider value={{favs, setFavs}}>
        {children}
    </FavContext.Provider>
}


