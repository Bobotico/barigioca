import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
<div className="container-fluid bg-dark">
  <div className="row">
    <div className="col-sm logoTouplay">
      <div className="row" style={{justifyContent: "center"}}>
      <Link to ="www.touplay.it">
      <img
        src=".\media\logo-bianco.png"
        className="mt-5 mb-5" /* bg-light crea un bacgkround dietro l'immagine del logo nel footer */
        width="315px"
        alt="logo Tou.play"
      />
      </Link>
      </div>

      <div className="row" style={{justifyContent: "center"}}>
      <ul className="list-unstyled d-flex">
        <li>
          <Link to="">
            <i className="fab fa-facebook-f fa-2x mx-4 mx-md-5 text-light"></i>
          </Link>
            </li>
        <li>
          <Link to="">
            <i className="fab fa-twitter fa-2x mx-4 mx-md-5 text-light"></i>
          </Link>
        </li>
        <li>
          <Link to="">
            <i className="fab fa-instagram fa-2x mx-4 mx-md-5 text-light"></i>
          </Link>
        </li>
      </ul>
      </div>

    </div>

    <div class="col-sm mt-5" style={{textAlign:"center", justifyContent: "center"}}>
      <ul className="text-light list-unstyled pt-2 footerList">
        <li>indirizzo: Via Colonnello de Cristoforis, 8</li>
        <li>telefono: +39 3460811523</li>
        <li>email: info@touplay.it</li>
      </ul>
    </div>


    <div class="col-sm">
      <div className="row" style={{justifyContent: "center"}}>
      <Link to="/">
      <img
        src=".\media\logo_barigioca_piccolo.jpg"
        className="mt-5 mb-5 barigioca-footer logoBarigioca" /* bg-light crea un bacgkround dietro l'immagine del logo nel footer */
        width="180px"
        alt="logo Barigioca"
      />
      </Link>
      </div>

      <div className="row" style={{justifyContent: "center"}}>
      <ul className="list-unstyled d-flex">
        <li>
          <Link to="">
            <i className="fab fa-facebook-f fa-2x mx-4 mx-md-5 text-light"></i>
          </Link>
            </li>
        <li>
          <Link to="">
            <i className="fab fa-twitter fa-2x mx-4 mx-md-5 text-light"></i>
          </Link>
        </li>
        <li>
          <Link to="">
            <i className="fab fa-instagram fa-2x mx-4 mx-md-5 text-light"></i>
          </Link>
        </li>
      </ul>
      </div>
    </div>
      

  </div>
</div>
  );
};

export default Footer;
