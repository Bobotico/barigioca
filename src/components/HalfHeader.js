import { useEffect, useState } from "react";
import Aos from "aos";

function HalfHeader() {
  const [header, setHeader] = useState();
  const [description, setDescription] = useState();
  //const [page, setPage] = useState(location.pathname);

  useEffect(() => {
    changeHeader();
    Aos.init({});
  }, []);

  const changeHeader = () => {
    const url = window.location.pathname;

    if (url === "/Corsi") {
      setHeader("I Corsi");
      setDescription("Il gioco è una cosa seria, per questo abbiamo pensato e realizzato corsi per tutte le età dove il gioco è strumento per imparare a conoscere meglio gli altri e il mondo che ci circonda.");
    } if (url === "/Prodotti") {
      setHeader("I Prodotti");
      setDescription ("Giochi da tavolo, da strada, di ruolo e tanti altri gadget per bambini adulti e meno adulti. Per info, costi e aneddoti contattare +39 346 081 1523 (Aldo)");

    } /*if {
      setHeader("Specifiche Corsi");
      setDescription ("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, felis et tincidunt laoreet mauris vulputate, felis et tincidunt laoreet")
    }*/
  }

  return (
    <section className="p-0 m-0">
      <div className="headerContainer container-fluid d-flex flex-column justify-content-around half-above">
        <div className="row">
          <div data-aos="zoom-in-up" className="col-12">

            <h1 className="h1-title-bigger mt-5 pt-5">{header}</h1>
            <p className="p-description-bigger" /*con la parte di codice che segue cambiamo le dimensioni del font dell'header*/>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HalfHeader;