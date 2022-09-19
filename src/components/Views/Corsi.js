import React from 'react'

import HalfHeader from "../HalfHeader.js";
import "./Corsi.css";

function Corsi({ corsi }) {
  return (
    <>
      <HalfHeader />
      {corsi.map((corso) => (
        <section data-aos="fade-up" className="my-5">
          <div className="container-fluid"> {/*bg-warning*/}
            <div className="row corsoContainer">
              <div className="corso col-md-6 col-12">
                <img className="imageCorso d-block mx-auto shadow" src={corso.image} alt="" />
              </div>
              <div className="infoCorso col-md-6 col-12" /*con la parte di codice che segue cambiamo le dimensioni del font dell'header*/ style={{ fontSize: '1.5em' }}>
                <h1 className="nomeCorso">{corso.name}</h1>
                <p className="descrizioneCorso">{corso.description}</p>
                {/*<div className="alignButton">
                  <Link to="/Corso1" className="buttonCorso btn btn-lg btn-success rounded-pill">
                    More info
                  </Link>
                </div>*/}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default Corsi;

