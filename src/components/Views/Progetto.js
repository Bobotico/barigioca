import CarouselContainer from "../CarouselContainer";
import ProductSlideshow from "../ProductSlideshow";

import { HashLink } from "react-router-hash-link";

import React, { useEffect } from "react";
import Aos from "aos";

function Progetto({ corsi, productCatalog }) {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <section className="p-0 m-0">
        <div className="headerContainer container-fluid d-flex flex-column above">
          <div className="row">
            <div data-aos="zoom-in-down" className="col-md-4 col-12">
                <img
                  className="circular-logo d-flex" //img-fluid
                  src="media/barigioca_logo.jpg"
                  alt=""
                />
            </div>
            
            <div data-aos="zoom-in-up" className="col-md-8 col-12 headerTextContainer" /* con la parte di codice che segue cambiamo le dimensioni del font dell'header*/style={{ fontSize: '1.5em' }}>
              <h1>&nbsp;</h1>
              <h1>&nbsp;</h1>
              <h1 className= "h1-title">Il progetto</h1>
              <p className= "p-description">
                Una community di giovani game designer e storyteller alimentata dalla passione per il gioco di ruolo e dalla voglia di lanciare un brand di giochi made in Bari.
              </p>
            </div>
          </div>
          <div className="row justify-content-center d-lg-flex d-none">
            <HashLink to="#toBanners" className="text-center">
              <i className="fas fa-chevron-down fa-3x scrollDown transition"></i>
            </HashLink>
          </div>
        </div>
      </section>
      <div id="toBanners" className="fix-height d-lg-block d-none"></div>
     


        <CarouselContainer corsi={corsi}/> 

      <section className="my-5">
      <div className="productBannerHeight container-fluid bg-info">
        <div data-aos="fade-up" className="row">

        <h1 className="iprodotti col-md-12 col-12 pt-5">I Prodotti</h1>


          <div data-aos="fade-up" className="col-md-12 col-12">
            <ProductSlideshow productCatalog={productCatalog}/>
          </div>
     
        </div>

        <div className="row mt-3 mb-3"></div>

      </div>
      </section>

    </>
  );
}

export default Progetto;
