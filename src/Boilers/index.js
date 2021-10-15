import React, { useContext } from "react";
import Boiler from "./Boiler";
import { AppContext } from "../App";

function Boilers() {
  const [state] = useContext(AppContext);
  const { boilers } = state;
  //console.log(boilers);

  return (
    <div className="col-8">
      <div className="row">
        {boilers?.map((bolier) => (
          <Boiler key={bolier._id} {...bolier} />
        ))}
      </div>
    </div>
  );
}
export default Boilers;
