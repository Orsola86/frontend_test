import React, { useContext } from "react";
import { AppContext } from "./App";

function Rating({ stelle }) {
  return [...Array(5)].map((_, index) =>
    index < stelle ? (
      <i key={index} class="fas fa-star fa-xs"></i>
    ) : (
      <i key={index} class="far fa-star fa-xs"></i>
    )
  );
}
export default Rating;
