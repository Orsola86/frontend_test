import React, { useContext } from "react";
import boiler from "../../images/boiler.png";
import { AppContext } from "../../App";
import Rating from "../../Rating";
import { confronta } from "../../actions";

function Boiler({
  brand,
  descrizione,
  _id,
  note,
  prezzo,
  prezzoPreSconto,
  stelle,
}) {
  const [, dispatch] = useContext(AppContext);

  return (
    <div className="col-4">
      <div className="boiler">
        <div id="cardImg">
          {prezzoPreSconto ? (
            <button type="button" class="btn">
              Risparmi il 20%
            </button>
          ) : (
            <div></div>
          )}
          <i
            onClick={(event) => event.target.classList.toggle("fas")}
            class="far fa-heart"
          ></i>
          <img src={boiler} alt="immagine boiler" className="immagine-boiler" />
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
          <span className="stelle">
            <Rating stelle={stelle} />
          </span>

          <label className="confronta">
            CONFRONTA &nbsp;
            <input
              id={_id}
              type="checkbox"
              name="confronta"
              value="1"
              onChange={() => dispatch({ type: confronta, payload: _id })}
            />
          </label>
        </div>
      </div>
    </div>
  );
}
export default Boiler;
