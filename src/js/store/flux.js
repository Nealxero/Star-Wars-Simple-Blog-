const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      favorites: [],
    },

    actions: {

     /* onClickSaveFavorite: (uid) => {
        setStore({
          favorite: [uid],
        });
      },*/

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },


      loadSomeData: () => {
        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const favorites = store.favorite.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ favorites: favorites });
      },
      popUpAlert: () => {
        alert("This is an alert");
      },

      updateFavoriteList: (newElement) => {
        const store = getStore();
        console.log(store);
        const newFavorites = [...store.favorites, newElement];
        setStore({ favorites: newFavorites });
      },

      deleteFavorite: (data) => {
        //get the store
        const store = getStore();

        let newFavorites = store.favorites.filter((item, i) => i != data);

        setStore({ favorites: newFavorites });
      },
    },
  };
};

export default getState;
