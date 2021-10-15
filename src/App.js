import React, { useEffect, useReducer, createContext } from "react";
import Filters from "./Filters";
import Boilers from "./Boilers";
import Compare from "./Compare";
import axios from "axios";

const Initial_State = {
  boilers: [],
  confronta: [],
};

function reducer(state, action) {
  console.log(action.payload);
  switch (action.type) {
    case "fetchData":
      return {
        ...state,
        boilers: action.payload,
      };
    // - Vi servirà sicuramente l'ID del prodotto che state selezionando quando premente il checkbox
    // - Essendo che il checkbox si seleziona/deseleziona dovremmo
    //   usare la logica del togliere/mettere da qualche parte (probabilmente nel reducer)
    // - Nel reducer, come abbiamo visto, possono esserci if/else dentro un "case"
    // - Il metodo "FIND" degli array può tornarvi particolarmente utile
    //anche il metodo "SOME" potrebbe ritornarvi particolarmente utile
    case "confronta":
      const isProductSelected = (e) => e === action.payload;
      return {
        ...state,
        confronta: state.confronta.some(isProductSelected)
          ? state.confronta.filter((e) => e !== action.payload)
          : [...state.confronta, action.payload],
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
        <Compare />
      </AppContext.Provider>
    </div>
  );
}

export default App;
