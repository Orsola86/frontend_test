import React, { useEffect, useReducer, createContext } from "react";
import Filters from "./Filters";
import Boilers from "./Boilers";
import Compare from "./Compare";
import axios from "axios";
import { ADD_BOILER, CONFRONTA, ADD_FILTERS, SELECTED_FILTER } from "./actions";

const Initial_State = {
  boilers: [],
  confronta: [],
  filters: [],
  filteredBoilers: {},
};

function reducer(state, action) {
  console.log(state);
  switch (action.type) {
    case ADD_BOILER:
      return {
        ...state,
        boilers: action.payload,
      };
    case CONFRONTA:
      const isProductSelected = (e) => e === action.payload;
      return {
        ...state,
        confronta: state.confronta.some(isProductSelected)
          ? state.confronta.filter((e) => e !== action.payload)
          : [...state.confronta, action.payload],
      };
    case ADD_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };

    case SELECTED_FILTER:
      return {
        ...state,
        filteredBoilers: {
          // ...state.filteredBoilers,
          // [action.payload.name]: action.payload.checked
          //   ? action.payload.value
          //   : "",

          ...state.boilers?.filter((boiler) =>
            action.payload.checked
              ? boiler[action.payload.name].toLowerCase() ===
                action.payload.value.toLowerCase()
              : ""
          ),
        },
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
            type: ADD_BOILER,
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
            type: ADD_FILTERS,
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
