import React from "react";
import boiler from "../../images/boiler.png";
import Confronta from "../../Confronta";

function Boiler({
  brand,
  descrizione,
  id,
  immagine,
  note,
  prezzo,
  prezzoPreSconto,
  stelle,
}) {
  return (
    <div className="col-4">
      <div className="boiler">
        <div id="cardImg">
          {prezzoPreSconto && (
            <button type="button" class="btn">
              Risparmi il 20%
            </button>
          )}
          <img src={boiler} alt="immagine boiler" className="immagine-boiler" />
          <i class="far fa-heart"></i>
        </div>
        <div>
          <h4 className="brands">{brand.toUpperCase()}</h4>
          <p className="descrizione">{descrizione}</p>
          <span className={`prezzo ${prezzoPreSconto && "scontato"}`}>
            {prezzo}
          </span>
          {prezzoPreSconto && (
            <span className="prezzoPreSconto">{prezzoPreSconto}</span>
          )}
          <p className={`note ${prezzoPreSconto && "scontato"}`}>{note}</p>
        </div>
        <hr />
        <div className="cardFooter">
          <span className="stelle">{stelle}</span>

          <label className="confronta">
            CONFRONTA
            <input type="checkbox" name="confronta" value="1" />
          </label>
        </div>
      </div>
    </div>
  );
}
export default Boiler;
