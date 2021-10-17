import React, { useContext } from "react";
import { AppContext } from "../App";
import Filter from "./Filter";

function Filters() {
  const [state] = useContext(AppContext);
  const { filters } = state;

  return (
    <div className="col-4 borderRight">
      <div class="categorie">
        <h4>CATEGORIE</h4>
        <ul className="first-ul">
          <li>Riscaldamento</li>
          <ul>
            <li>Casa e acqua</li>
            <li>Casa</li>
            <li>Acqua</li>
          </ul>
        </ul>
      </div>
      <hr />
      <div class="filters">
        {filters?.map((filter, index) => (
          <Filter key={index} filter={filter} />
        ))}
      </div>
    </div>
  );
}
export default Filters;
