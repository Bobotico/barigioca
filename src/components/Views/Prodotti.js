import HalfHeader from "../HalfHeader.js";
import Cards from "../Cards";

import React, { useEffect } from "react";
import Aos from "aos";

function Prodotti({ productCatalog }) {

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <HalfHeader />
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
