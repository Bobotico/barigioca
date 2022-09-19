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
<<<<<<< HEAD
        src=".\media\Logo-bianco.png"
        className="mt-5 mb-5" /* bg-light crea un bacgkround dietro l'immagine del logo nel footer */
        width="245px"
=======
        src=".\media\logo-bianco.png"
        className="mt-5 mb-5" /* bg-light crea un bacgkround dietro l'immagine del logo nel footer */
        width="315px"
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
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
<<<<<<< HEAD
        <li style={{fontSize: "22px"}}>indirizzo: Via Colonnello de Cristoforis, 8</li>
        <li style={{fontSize: "22px"}}>telefono: +39 3460811523</li>
        <li style={{fontSize: "22px"}}>email: info@touplay.it</li>
=======
        <li>indirizzo: Via Colonnello de Cristoforis, 8</li>
        <li>telefono: +39 3460811523</li>
        <li>email: info@touplay.it</li>
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
      </ul>
    </div>


    <div class="col-sm">
      <div className="row" style={{justifyContent: "center"}}>
      <Link to="/">
      <img
        src=".\media\logo_barigioca_piccolo.jpg"
        className="mt-5 mb-5 barigioca-footer logoBarigioca" /* bg-light crea un bacgkround dietro l'immagine del logo nel footer */
<<<<<<< HEAD
        width="140px"
=======
        width="180px"
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
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
