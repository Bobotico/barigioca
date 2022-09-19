import { Form } from "react-bootstrap";
import Iframe from "react-iframe";
import { Link } from "react-router-dom";
import './Contatti.css';

import React, { useEffect } from "react";
import Aos from "aos";

function Contatti() {
  //const params = useParams();

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
              <h1 className= "h1-title-bigger" diplay="flex" align-item="center" justify-content="center">Contattaci</h1>
              <p className= "p-description-bigger-contatti">
                I contatti di "BARI GIOCA: In Libertà" che sono in questa pagina sono sempre a tua disposizione.</p>
              <p className= "p-description-bigger-contatti">
<<<<<<< HEAD
                Per prenotare il laboratorio per le tue sessioni: <a href="mailto:gameroom@gmail.com">gameroom@touplay.it</a></p>
              <p className= "p-description-bigger-contatti">
                Per informazioni e proposte: <a href="mailto:info@touplay.it">info@touplay.it</a></p>
=======
                Per prenotare il laboratorio per le tue sessioni: <a href="gameroom@gmail.com">gameroom@touplay.it</a></p>
              <p className= "p-description-bigger-contatti">
                Per informazioni e proposte: <a href="info@touplay.it">info@touplay.it</a></p>
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
              <p className= "p-description-bigger-contatti">  
                Per telefonate, messaggi e altre richieste: +39 3460811523
              </p>
            </div>
          </div>
        </div>
      </section>


      <Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.450387541737!2d16.853904815417657!3d41.124692979289215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1347e88d29e9c9cd%3A0x585d1b70ea5c31ce!2sSpazio%2013!5e0!3m2!1sit!2sit!4v1617447352263!5m2!1sit!2sit"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></Iframe>

      <div className="container-fluid d-flex justify-content-center py-md-5 py-5 bg-contact-social">
        <ul className="list-unstyled d-flex">
          <li>
            <Link className="p-0 m-0" to="https://www.facebook.com/BariGioca"> {/* nella sezione to="" inserire tra le virgolette il link del social */}
              <i className="fab fa-facebook-f fa-2x mx-lg-5 mx-3 text-light"></i>
            </Link>

          </li>
          <li>
            <Link className="p-0 m-0" to=""> {/* nella sezione to="" inserire tra le virgolette il link del social */}
              <i className="fab fa-twitter fa-2x mx-lg-5 mx-3 text-light"></i>
            </Link>
          </li>
          <li>
            <Link className="p-0 m-0" to=""> {/* nella sezione to="" inserire tra le virgolette il link del social */}
              <i className="fab fa-instagram fa-2x mx-lg-5 mx-3 text-light"></i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="row justify-content-center pt-5 mx-auto">
        <h1>Contattaci via Email</h1>
      </div>
      <hr className="separator myseparator"></hr>
      <div className="bg-form p-5">
        <Form className="container formContainer mt-5 pt-5/*px-custom*/">
          <Form.Group className="mt-5 pt-5 row justify-content-between">
            <div className="col-12 col-md-6">
              {/* <Form.Label>Nome e Cognome</Form.Label> */}
              <Form.Control
                size="md"
                type="text"
                placeholder="NOME E COGNOME"
              />
            </div>
            <div className="col-12 col-md-6 my-3 my-md-0">
              {/* <Form.Label>E-mail</Form.Label> */}
              <Form.Control 
                size="md" 
                type="text" 
                placeholder="E-MAIL" />
            </div>
          </Form.Group>
          <Form.Group className="pt-3" controlId="exampleForm.ControlTextarea1">
            {/* <Form.Label>Messaggio</Form.Label> */}
            <Form.Control
              as="textarea"
              rows={6}
              placeholder="IL TUO MESSAGGIO"
            />
          </Form.Group>
          <div className="row justify-content-center pt-3">
            <Link className="btn btn-lg btn-success border border-dark" to="">
              Invia
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Contatti;
