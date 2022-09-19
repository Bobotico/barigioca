import { Link } from "react-router-dom";
import React from "react";

function Nav({ navbar, displayMenu, closeMenu, handleClick, click, smartmenu}) {

  return (

    <nav
      /*data-aos="fade-down"*/
      className={`navbar transition align-items-center py-3 px-0 fixed-top ${
        navbar ? "bg-main shadow" : "bg-main" /*sostituire "bg-main" con "trasparent" per effetto scroll progressivo (però poi da debuggare)*/
      }`}
    >
      <div className="p-0 m-0">
        <img
<<<<<<< HEAD
          src="./media/Logo-bianco.png" /*da qui cambiamo il logo dell'header*/ 
          alt="logo tou.play"
          width="145px"
=======
          src="./media/logo-bianco.png" /*da qui cambiamo il logo dell'header*/ 
          alt="logo tou.play"
          width="175px"
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
          className="img-fluid mx-4 d-block py-2" /*mx - aumentare il valore per spostare il logo più a destra*/
        />
      </div>
      <div className="p-0 m-0 mr-4">
        <div onClick={displayMenu} /*hamburger menu responsive*/>        
          <i className={displayMenu ? 'fas fa-bars fa-2x d-block d-md-none' : 'fas fa-times fa-2x d-block d-md-none'}/>
        </div> 

        <ul
          className={`navbar-nav list-unstyled list-group-horizontal-md ${
            smartmenu ? "smartnav active" : "smartnav" /*clickando sull'hamburger si apre la nuova navbar*/           
          }`}
        >

        <div className="close-menu-icon" onClick={handleClick} /*clickando sull'hamburger compare anche il pulsante per chiudere il menu*/  >
        <i className='fas fa-times fa-2x d-block d-md-none' onClick={closeMenu} /*clickando sul pulsante per chiudere il menu, si chiude il menu*//>
        </div>

          <li className="nav-item inline-list my-3 my-md-0">
<<<<<<< HEAD
            <Link onClick={closeMenu}
=======
            <Link
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
              className="text-decoration-none font-weight-bold mx-3 text-white"
              to="/">
              Progetto
            </Link>
          </li>
          <li className="nav-item inline-list my-3 my-md-0">
<<<<<<< HEAD
            <Link onClick={closeMenu}
=======
            <Link
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
              className="text-decoration-none font-weight-bold mx-3 text-white"
              to="/Corsi">
              I Corsi
            </Link>
          </li>
          <li className="nav-item inline-list my-3 my-md-0">
<<<<<<< HEAD
            <Link onClick={closeMenu}
=======
            <Link
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
              className="text-decoration-none font-weight-bold mx-3 text-white"
              to="/Prodotti">
              I Prodotti
            </Link>
          </li>
          <li className="nav-item inline-list my-3 my-md-0">
<<<<<<< HEAD
            <Link onClick={closeMenu}
=======
            <Link
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
              className="text-decoration-none font-weight-bold mx-3 text-white"
              to="/Contatti">
              Contatti
            </Link>
          </li>
          {/*<li className="nav-item inline-list my-3 my-md-0">
            <Link
              className="text-decoration-none font-weight-bold mx-3 text-white"
              to="/Login">
              Login
            </Link>
          </li>*/}
        </ul>
      </div>
    </nav>

  );
}

export default Nav;