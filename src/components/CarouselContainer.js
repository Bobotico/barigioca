import React from 'react'

import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CarouselContainer.css";


const CarouselContainer = ({ corsi }) => {
  return (
    <Carousel className="carouselCourse">

      <Carousel.Item className="carouselItem">

        {/*<img
        className= "carouselImage"
        src= "" //./media/alabarda_spaziale2.jpg
        alt= "First Slide"
        />*/}

        <Carousel.Caption className= "carouselCaption">
          <h1>Storytelling</h1>
          <p>Ogni bel gioco ha una bella storia, dei dadi e delle miniature! <br /> Confrontati con gli scrittori dei personaggi e delle avventure dei nostri giochi di ruolo. Impara a governare una sessione di gioco dei sistemi di regole più importanti come Dungeons & Dragons e Vampiri: La Masquerade!</p>
        </Carousel.Caption>

        <Carousel.Caption className="buttonCorso1 text-white">
              <Link to="/Corsi" className="continueButton1 btn btn-lg btn-danger rounded-pill">
                <h1 className="btnTXT1">Continua</h1>
              </Link>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item className="carouselItem">

        {/*<img
        className= "carouselImage"
        src= "" //./media/alabarda_spaziale2.jpg
        alt= "Second Slide"
        />*/}

        <Carousel.Caption className= "carouselCaption">
          <h1>Game-design</h1>
          <p>Meccaniche, dinamiche, equilibrio tra turni e punteggi, elementi di gioco. <br /> Come si passa da Risiko a Zombicide? Impara gli approcci di design dai professionisti del settore e mettiti in gioco con il tuo prototipo migliore! Dall’idea all’azione! </p>
        </Carousel.Caption>

        
        <Carousel.Caption className="buttonCorso2 text-white">
              <Link to="/Corsi" className="continueButton1 btn btn-lg btn-danger rounded-pill">
                <h1 className="btnTXT1">Continua</h1>
              </Link>
        </Carousel.Caption>

      </Carousel.Item>

      <Carousel.Item className="carouselItem">

        {/*<img
        className= "carouselImage"
        src= "" //./media/alabarda_spaziale2.jpg
        alt= "Second Slide"
        />*/}

        <Carousel.Caption className= "carouselCaption">
          <h1>Arte e cultura</h1>
          <p>I nostri giochi respirano l’aria delle nostre città! <br /> Cacce al tesoro ed escape room per Musei, Centri Storici e fondazioni culturali. <br /> Inventa la tua #GameExperience giocando con il territorio in cui vivi e scopri un mondo di misteri e segreti degni delle migliori serie TV!</p>
        </Carousel.Caption>

        
        <Carousel.Caption className="buttonCorso3 text-white">
              <Link to="/Corsi" className="continueButton1 btn btn-lg btn-danger rounded-pill">
                <h1 className="btnTXT1">Continua</h1>
              </Link>
        </Carousel.Caption>

      </Carousel.Item>
      

      {/*<Carousel.Item>


        <img
        className= "d-block w-100"
        src= "./media/alabarda_spaziale2.jpg"
        alt= "First Slide"
        />
        <Carousel.Caption>
          <h1></h1>
          <p></p>
        </Carousel.Caption>

        </Carousel.Item>*/}

    </Carousel>
  );
};

export default CarouselContainer;