import React, { useEffect, useReducer, createContext } from "react";
import Filters from "./Filters";
import Boilers from "./Boilers";
import Compare from "./Compare";
import axios from "axios";
import { addBoiler, confronta, addFilters } from "./actions";

const Initial_State = {
  boilers: [],
  confronta: [],
  filters: [],
};

function reducer(state, action) {
  switch (action.type) {
    case addBoiler:
      return {
        ...state,
        boilers: action.payload,
      };
    case confronta:
      const isProductSelected = (e) => e === action.payload;
      return {
        ...state,
        confronta: state.confronta.some(isProductSelected)
          ? state.confronta.filter((e) => e !== action.payload)
          : [...state.confronta, action.payload],
      };

    case addFilters:
      return {
        ...state,
        filters: action.payload,
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
            type: addBoiler,
            payload: response.data,
          });
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchFilters() {
      await axios.get("http://localhost:9000/stock").then((response) => {
        response.status === 200 &&
          dispatch({
            type: addFilters,
            payload: response.data,
          });
      });
    }
    fetchFilters();
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
