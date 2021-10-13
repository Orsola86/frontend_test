import React from "react";
import boiler from "../src/images/boiler.png";

function App() {
  return (
    <>
      <div className="container">
        <div className="ordina">
          <p>Ordina per: migliori recensioni</p>
          <i class="fas fa-chevron-down"></i>
        </div>
        <div className="row">
          {/* flitri */}
          <div className="col-4">
            <i class="fas fa-heart"></i>
            <i class="fas fa-star"></i>
          </div>
          {/* Boilers */}
          <div className="col-8">
            <div className="row">
              {/* boiler */}
              <div className="col-4">
                <div className="boiler">
                  <div id="cardImg">
                    <button type="button" class="btn">
                      Risparmi il 20%
                    </button>
                    <img
                      src={boiler}
                      alt="immagine boiler"
                      className="immagine-boiler"
                    />
                    <i class="far fa-heart"></i>
                  </div>
                  <div>
                    <h4 className="brand">ARISTON</h4>
                    <p className="descrizione">
                      Matis condens - Condensing Boiler 24 kW Methane - Indoor
                    </p>
                    <span className="prezzo">1.350,00</span>
                    <span className="prezzoPreSconto">1.570,00</span>
                    <p className="note">Sopralluogo e installazione inclusi</p>
                  </div>
                  <hr />
                  <div className="cardFooter">
                    <span className="stelle">4</span>
                    <form>
                      <label>
                        {" "}
                        CONFRONTA
                        <input type="checkbox" name="confronta" value="1" />
                      </label>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="boiler">
                  <div id="cardImg">
                    <button type="button" class="btn">
                      Risparmi il 20%
                    </button>
                    <img
                      src={boiler}
                      alt="immagine boiler"
                      className="immagine-boiler"
                    />
                    <i class="far fa-heart"></i>
                  </div>
                  <div>
                    <h4 className="brand">ARISTON</h4>
                    <p className="descrizione">
                      Matis condens - Condensing Boiler 24 kW Methane - Indoor
                    </p>
                    <span className="prezzo">1.350,00</span>
                    <span className="prezzoPreSconto">1.570,00</span>
                    <p className="note">Sopralluogo e installazione inclusi</p>
                  </div>
                  <hr />
                  <div className="cardFooter">
                    <span className="stelle">4</span>
                    <form>
                      <label>
                        {" "}
                        CONFRONTA
                        <input type="checkbox" name="confronta" value="1" />
                      </label>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="boiler">
                  <div id="cardImg">
                    <button type="button" class="btn">
                      Risparmi il 20%
                    </button>
                    <img
                      src={boiler}
                      alt="immagine boiler"
                      className="immagine-boiler"
                    />
                    <i class="far fa-heart"></i>
                  </div>
                  <div>
                    <h4 className="brand">ARISTON</h4>
                    <p className="descrizione">
                      Matis condens - Condensing Boiler 24 kW Methane - Indoor
                    </p>
                    <span className="prezzo">1.350,00</span>
                    <span className="prezzoPreSconto">1.570,00</span>
                    <p className="note">Sopralluogo e installazione inclusi</p>
                  </div>
                  <hr />
                  <div className="cardFooter">
                    <span className="stelle">4</span>
                    <form>
                      <label>
                        {" "}
                        CONFRONTA
                        <input type="checkbox" name="confronta" value="1" />
                      </label>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="boiler">
                  <div id="cardImg">
                    <button type="button" class="btn">
                      Risparmi il 20%
                    </button>
                    <img
                      src={boiler}
                      alt="immagine boiler"
                      className="immagine-boiler"
                    />
                    <i class="far fa-heart"></i>
                  </div>
                  <div>
                    <h4 className="brand">ARISTON</h4>
                    <p className="descrizione">
                      Matis condens - Condensing Boiler 24 kW Methane - Indoor
                    </p>
                    <span className="prezzo">1.350,00</span>
                    <span className="prezzoPreSconto">1.570,00</span>
                    <p className="note">Sopralluogo e installazione inclusi</p>
                  </div>
                  <hr />
                  <div className="cardFooter">
                    <span className="stelle">4</span>
                    <form>
                      <label>
                        {" "}
                        CONFRONTA
                        <input type="checkbox" name="confronta" value="1" />
                      </label>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="boiler">
                  <div id="cardImg">
                    <button type="button" class="btn">
                      Risparmi il 20%
                    </button>
                    <img
                      src={boiler}
                      alt="immagine boiler"
                      className="immagine-boiler"
                    />
                    <i class="far fa-heart"></i>
                  </div>
                  <div>
                    <h4 className="brand">ARISTON</h4>
                    <p className="descrizione">
                      Matis condens - Condensing Boiler 24 kW Methane - Indoor
                    </p>
                    <span className="prezzo">1.350,00</span>
                    <span className="prezzoPreSconto">1.570,00</span>
                    <p className="note">Sopralluogo e installazione inclusi</p>
                  </div>
                  <hr />
                  <div className="cardFooter">
                    <span className="stelle">4</span>
                    <form>
                      <label>
                        {" "}
                        CONFRONTA
                        <input type="checkbox" name="confronta" value="1" />
                      </label>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="boiler">
                  <div id="cardImg">
                    <button type="button" class="btn">
                      Risparmi il 20%
                    </button>
                    <img
                      src={boiler}
                      alt="immagine boiler"
                      className="immagine-boiler"
                    />
                    <i class="far fa-heart"></i>
                  </div>
                  <div>
                    <h4 className="brand">ARISTON</h4>
                    <p className="descrizione">
                      Matis condens - Condensing Boiler 24 kW Methane - Indoor
                    </p>
                    <span className="prezzo">1.350,00</span>
                    <span className="prezzoPreSconto">1.570,00</span>
                    <p className="note">Sopralluogo e installazione inclusi</p>
                  </div>
                  <hr />
                  <div className="cardFooter">
                    <span className="stelle">4</span>
                    <form>
                      <label>
                        {" "}
                        CONFRONTA
                        <input type="checkbox" name="confronta" value="1" />
                      </label>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="boiler">
                  <div id="cardImg">
                    <button type="button" class="btn">
                      Risparmi il 20%
                    </button>
                    <img
                      src={boiler}
                      alt="immagine boiler"
                      className="immagine-boiler"
                    />
                    <i class="far fa-heart"></i>
                  </div>
                  <div>
                    <h4 className="brand">ARISTON</h4>
                    <p className="descrizione">
                      Matis condens - Condensing Boiler 24 kW Methane - Indoor
                    </p>
                    <span className="prezzo">1.350,00</span>
                    <span className="prezzoPreSconto">1.570,00</span>
                    <p className="note">Sopralluogo e installazione inclusi</p>
                  </div>
                  <hr />
                  <div className="cardFooter">
                    <span className="stelle">4</span>
                    <form>
                      <label>
                        {" "}
                        CONFRONTA
                        <input type="checkbox" name="confronta" value="1" />
                      </label>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="boiler">
                  <div id="cardImg">
                    <button type="button" class="btn">
                      Risparmi il 20%
                    </button>
                    <img
                      src={boiler}
                      alt="immagine boiler"
                      className="immagine-boiler"
                    />
                    <i class="far fa-heart"></i>
                  </div>
                  <div>
                    <h4 className="brand">ARISTON</h4>
                    <p className="descrizione">
                      Matis condens - Condensing Boiler 24 kW Methane - Indoor
                    </p>
                    <span className="prezzo">1.350,00</span>
                    <span className="prezzoPreSconto">1.570,00</span>
                    <p className="note">Sopralluogo e installazione inclusi</p>
                  </div>
                  <hr />
                  <div className="cardFooter">
                    <span className="stelle">4</span>
                    <form>
                      <label>
                        {" "}
                        CONFRONTA
                        <input type="checkbox" name="confronta" value="1" />
                      </label>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <div className="boiler">
                  <div id="cardImg">
                    <button type="button" class="btn">
                      Risparmi il 20%
                    </button>
                    <img
                      src={boiler}
                      alt="immagine boiler"
                      className="immagine-boiler"
                    />
                    <i class="far fa-heart"></i>
                  </div>
                  <div>
                    <h3 className="brand">ARISTON</h3>
                    <p className="descrizione">
                      Matis condens - Condensing Boiler 24 kW Methane - Indoor
                    </p>
                    <span className="prezzo">1.350,00</span>
                    <span className="prezzoPreSconto">1.570,00</span>
                    <p className="note">Sopralluogo e installazione inclusi</p>
                  </div>
                  <hr />
                  <div className="cardFooter">
                    <span className="stelle">4</span>
                    <form>
                      <label>
                        {" "}
                        CONFRONTA
                        <input type="checkbox" name="confronta" value="1" />
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
