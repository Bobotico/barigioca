import Cards from "../Cards";

import React, { useEffect } from "react";
import Aos from "aos";

function Prodotti({ productCatalog }) {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <section className="p-0 m-0">
        <div className="headerContainer container-fluid d-flex flex-column half-above">
          <div className="row">

            
            <div data-aos="zoom-in-up" className="col-md-12 col-12" /* con la parte di codice che segue cambiamo le dimensioni del font dell'header*/style={{ fontSize: '1.5em' }}>
              <h1>&nbsp;</h1>
              <h1>&nbsp;</h1>
              <h1 className= "h1-title-bigger" diplay="flex" align-item="center" justify-content="center">I Prodotti</h1>
              <p className= "p-description-bigger-contatti">
                Giochi da tavolo, da strada, di ruolo e tanti altri gadget per bambini adulti e meno adulti.</p>
              <p className= "p-description-bigger-contatti">
                Per info, costi e aneddoti contattare +39 346 081 1523 (Aldo)</p>
            </div>
          </div>
        </div>
      </section>


      <div className="container my-5">
        <div data-aos="zoom-in-down" className="row justify-content-around" style={{ fontSize: '1.5em' }}>
          {productCatalog.map((product) => (

            <Cards id={product.name} product={product} />

          ))}
        </div>
      </div>
    </>
  );
}


export default Prodotti;
