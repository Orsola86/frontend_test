import React from "react";

function Filters() {
  return (
    <div className="col-4 borderRight">
      <div class="categorie">
        <p>CATEGORIE</p>
        <ul>
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
        <div class="scegli">
          <p>SCEGLI PER</p>
          <label>
            <input type="checkbox" name="scegli" value="disponibili" />
            Disponibili
          </label>
          <br />
          <label>
            <input type="checkbox" name="scegli" value="inSconto" />
            In promozione
          </label>
          <br />
        </div>
        <div class="brand">
          <p>MARCHE</p>
          <label>
            <input type="checkbox" name="brand" value="ariston" />
            Ariston
          </label>
          <br />
          <label>
            <input type="checkbox" name="brand" value="baxi" />
            Baxi
          </label>
          <br />
        </div>
        <div class="tipologia">
          <p>TIPOLOGIA</p>
          <label>
            <input type="checkbox" name="tipologia" value="condensazione" />A
            Condensazione
          </label>
          <br />
          <label>
            <input type="checkbox" name="tipologia" value="cameraAperta" />
            Camera Aperta
          </label>
          <br />
          <label>
            <input type="checkbox" name="tipologia" value="cameraStagna" />
            Camera Stagna
          </label>
          <br />
        </div>

        <div class="alimentazione">
          <p>ALIMENTAZIONE</p>
          <label>
            <input type="checkbox" name="alimentazione" value="elettrica" />
            Elettrica
          </label>
          <br />
          <label>
            <input type="checkbox" name="alimentazione" value="metano" />
            Metano
          </label>
          <br />
        </div>

        <div class="potenzaNominale">
          <p>POTENZA NOMINALE (kW)</p>
          <label>
            <input type="checkbox" name="potenzaNominale" value="diciannove" />
            19
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="potenzaNominale"
              value="ventiquattro"
            />
            24
          </label>
          <br />
          <label>
            <input type="checkbox" name="potenzaNominale" value="ventotto" />
            28
          </label>
          <br />
          <label>
            <input type="checkbox" name="potenzaNominale" value="trenta" />
            30
          </label>
          <br />
        </div>
        <div class="utilizzo">
          <p>UTILIZZO</p>
          <label>
            <input type="checkbox" name="utilizzo" value="esterno" />
            Esterno
          </label>
          <br />
          <label>
            <input type="checkbox" name="utilizzo" value="interno" />
            Interno
          </label>
          <br />
          <label>
            <input type="checkbox" name="utilizzo" value="internoEsterno" />
            Interno / Esterno
          </label>
          <br />
        </div>

        <div class="stelle">
          <p>RECENSIONI</p>
          <label>
            <input type="checkbox" name="stelle" value="cinque" />5
          </label>
          <br />
          <label>
            <input type="checkbox" name="stelle" value="quattro" />4
          </label>
          <br />
          <label>
            <input type="checkbox" name="stelle" value="tre" />3
          </label>
          <br />
          <label>
            <input type="checkbox" name="stelle" value="due" />2
          </label>
          <br />
          <label>
            <input type="checkbox" name="stelle" value="una" />1
          </label>
          <br />
        </div>
      </div>
    </div>
  );
}
export default Filters;
