import React, { useContext } from "react";
import { AppContext } from "./App";

function Compare() {
  const [state] = useContext(AppContext);
  const { confronta } = state;
  return (
    <>
      <div className={`banner ${confronta.length > 0 && "moved"}`}>
        {confronta.length === 1 && (
          <p>Seleziona altri 2 prodotti per confrontarli</p>
        )}
        {confronta.length === 2 && (
          <p>Seleziona ancora un prodotto per un confronto più dettagliato</p>
        )}
        {confronta.length === 3 && <p>Confronta i modelli selezionati</p>}
        <button className="btn-confronta" disabled={confronta.length <= 2}>
          CONFRONTA
        </button>
      </div>
    </>
  );
}
export default Compare;
