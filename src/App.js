import React, { useEffect, useReducer, createContext } from "react";
import Filters from "./Filters";
import Boilers from "./Boilers";
import Confronta from "./Confronta";
import axios from "axios";

const Initial_State = [];

function reducer(state, action) {
  switch (action.type) {
    case "fetchData":
      return {
        ...state,
        boilers: action.payload,
      };

    default:
      return state;
  }
}

export const AppContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, Initial_State);
  console.log(state);

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:9000/boilers").then((response) => {
        response.status === 200 &&
          dispatch({
            type: "fetchData",
            payload: response.data,
          });
      });
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <AppContext.Provider value={[state, dispatch]}>
        <div className="ordina">
          <p>Ordina per: migliori recensioni</p>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div className="row">
          {/* flitri */}
          <Filters />
          {/* Boilers */}
          <Boilers />
        </div>
        <Confronta />
      </AppContext.Provider>
    </div>
  );
}

export default App;
