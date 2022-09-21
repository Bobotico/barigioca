import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
<div className="container-fluid bg-dark">
  <div className="row">
    <div className="col-sm logoTouplay">
      <div className="row" style={{justifyContent: "center"}}>
      <a href="https://www.touplay.it" target="_blank" rel='noreferrer'>
      <img
        src=".\media\Logo-bianco.png"
        className="mt-4 mb-2 touplay-footer" /* bg-light crea un bacgkround dietro l'immagine del logo nel footer */
        width="245px"
        alt="logo Tou.play"
      />
      </a>
      </div>

      <div className="row social-row" style={{justifyContent: "center"}}>
      <ul className="list-unstyled d-flex">
        <li>
          <a href="https://www.facebook.com/TouPlayPuglia" target="_blank" rel='noreferrer' className="social-link">
            <i className="fab fa-facebook-f fa-2x mx-4 mx-md-5 text-light"></i>
          </a>
            </li>
        <li>
          <a href="https://www.linkedin.com/company/touplay" target="_blank" rel='noreferrer' className="social-link">
            <i className="fab fa-linkedin fa-2x mx-4 mx-md-5 text-light"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/touplay" target="_blank" rel='noreferrer' className="social-link">
            <i className="fab fa-instagram fa-2x mx-4 mx-md-5 text-light"></i>
          </a>
        </li>
      </ul>
      </div>

    </div>

    <div className="col-sm mt-5 mid-column" style={{textAlign:"center", justifyContent: "center"}}>
      <ul className="text-light list-unstyled pt-2 footerList">
        <li style={{fontSize: "22px"}}>indirizzo: Via Colonnello de Cristoforis, 8</li>
        <li style={{fontSize: "22px"}}>telefono: +39 3460811523</li>
        <li style={{fontSize: "22px"}}>email: info@touplay.it</li>
      </ul>
    </div>


    <div className="col-sm logoBarigioca">
      <div className="row" style={{justifyContent: "center"}}>
      <Link to="/">
      <img
        src=".\media\logo_barigioca_piccolo.jpg"
        className="mt-4 mb-2 barigioca-footer" /* bg-light crea un bacgkround dietro l'immagine del logo nel footer */
        width="140px"
        alt="logo Barigioca"
      />
      </Link>
      </div>

      <div className="row social-row" style={{justifyContent: "center"}}>
      <ul className="list-unstyled d-flex">
        <li className="social-barigioca">
          <a href="https://www.facebook.com/BariGioca" target="_blank" rel='noreferrer' className="social-link">
            <i className="fab fa-facebook-f fa-2x mx-4 mx-md-5 text-light"></i>
          </a>
            </li>
{/*        <li>
          <Link to="">
            <i className="fab fa-twitter fa-2x mx-4 mx-md-5 text-light"></i>
          </Link>
</li>*/   }
        <li>
          <a href="https://www.instagram.com/barigioca" target="_blank" rel='noreferrer' className="social-link">
            <i className="fab fa-instagram fa-2x mx-4 mx-md-5 text-light"></i>
          </a>
        </li>
      </ul>
      </div>
    </div>
      

  </div>
</div>
  );
};

export default Footer;
