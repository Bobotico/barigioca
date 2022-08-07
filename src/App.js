import "./App.css";

import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

import Footer from "./components/Footer";
import Contatti from "./components/Views/Contatti";
import Corsi from "./components/Views/Corsi";
//import Corso1 from "./components/Views/Corso1";
import Prodotti from "./components/Views/Prodotti";
import Progetto from "./components/Views/Progetto";

//import Prodotto1 from "./Prodotto1"

function App() {
  //const adminUser = {
  //  email: "admin@admin.com",
  //  password: "admin123"
  //}

  const [navbar, setNav] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick((curr) => !curr)
  const [smartmenu, setSmart] = useState(false);

  const productCatalog = [
    {
      image: "./media/alabarda_spaziale.jpg",
      name: "Lo schermo del master:",
      position: "First Slide",
      price: "10€",
      description: "Dai vecchi banchi di scuola a veri e propri pezzi unici...",
      description2: "Dai vecchi banchi di scuola a veri e propri pezzi unici. Gli schermi del master di Bari Gioca sono dei veri e propri gioielli artigianali, serigrafati e modellati uno ad uno per essere speciali e per aiutare a raccontare l’avventura di ogni storyteller che ne ha bisogno.",
    },
    {
      image: "./media/alabarda_spaziale.jpg",
      name: "Il trono di Puglia: board game",
      position: "Second Slide",
      price: "40€",
      description: "Un gioco di carte napoletane mischiate alle dinamiche dei party-game... ",
      description2: "Un gioco di carte napoletane mischiate alle dinamiche fresche e gioviali dei party-game. Una mappa di gioco che rappresenta la Puglia e tanto divertimento in un gioco creato per promuovere il nostro territorio",
    },
    {
      image: "./media/alabarda_spaziale.jpg",
      name: "Game-changers: il gioco di ruolo",
      position: "Third Slide",
      price: "40€",
      description: "Strumento, metodo e sistema di gioco...",
      description2: "Strumento, metodo e sistema di gioco. È composto da carte illustrate da un maestro di belle arti, avventure scritte e revisionate da un’equipe di designer e scrittori dei Pirati Culturali di Tou.Play e da un sistema di regole snello che lo rende adatto ad ogni contesto, da quello educativo a quello pubblico di fiere e manifestazioni ludiche ma anche per epiche campagne secolari da giocare con i tuoi amici e le tue amiche!",
    },

    {
      image: "./media/alabarda_spaziale.jpg",
      name: "Virruzzo",
      position: "Fourth Slide",
      price: "40€",
      description: "Un gioco antico che non invecchia mai",
      description2: "Un pezzo di legno a forma di cono, una punta di ferro e uno spago. Questi tre semplici elementi formano uno dei giochi più antichi della storia: il Virruzzo. I nostri avi, nonni e genitori si sono sfidati lanciandolo per le strade. Ora tocca a te!",
    },
    {
      image: "./media/alabarda_spaziale.jpg",
      name: "Delirio",
      position: "Fifth Slide",
      price: "40€",
      description: "Un gioco in legno da far perdere la testa",
      description2: "Realizzato a mano dai ragazzi del Libertà in messa alla prova, su modello di un artigiano, il Delirio è un gioco di precisione dove si lanciano pedine nel campo avversario attraverso un foro centrale. Un gioco tanto semplice quanto coinvolgente!",
    },
    {
      image: "./media/alabarda_spaziale.jpg",
      name: "Maglietta",
      position: "Sixth Slide",
      price: "40€",
      description: "Indossa e condividi il “priscio”!",
      description2: "Un trullo è un virruzzo capovolto? Il simbolo per eccellenza della Puglia incontra il nostro. La promozione del territorio si sposa con il gioco: lo strumento con il quale abbiamo scelto di raccontare la nostra regione. Condividi il priscio anche tu!",
    },
    {
      image: "./media/alabarda_spaziale.jpg",
      name: "Il trono di Puglia: libro game", //"Il Trono di Puglia: il Tesoro dello Svevo - Libro Game"
      position: "Seventh Slide",
      price: "40€",
      description: "Un libro, un gioco e un territorio da esplorare",
      description2: "Ti va di vestire i panni di un detective pronto a svelare i misteri di alcuni dei luoghi più iconici della Puglia? Un connubio tra fantasia e solidi agganci storici, per un’avventura coinvolgente e unica alla scoperta del territorio.",
    },
  ];

  const corsi = [
    {
      image: "./media/alabarda_spaziale2.jpg",
      position: "First Slide",
      name: "Storytelling",
      description:
        "Ogni bel gioco ha una bella storia, dei dadi e delle miniature! Confrontati con gli scrittori dei personaggi e delle avventure dei nostri giochi di ruolo. Impara a governare una sessione di gioco dei sistemi di regole più importanti come Dungeons & Dragons e Vampiri: La Masquerade!",
    },
    {
      image: "./media/alabarda_spaziale2.jpg",
      position: "Second Slide",
      name: "Game-design",
      description:
        "Meccaniche, dinamiche, equilibrio tra turni e punteggi, elementi di gioco. Come si passa da Risiko a Zombicide? Impara gli approcci di design dai professionisti del settore e mettiti in gioco con il tuo prototipo migliore! Dall’idea all’azione!",
    },
    {
      image: "./media/alabarda_spaziale2.jpg",
      position: "Third Slide",
      name: "Arte e cultura",
      description:
        "I nostri giochi respirano l’aria delle nostre città! Cacce al tesoro ed escape room per Musei, Centri Storici e fondazioni culturali. Inventa la tua #GameExperience giocando con il territorio in cui vivi e scopri un mondo di misteri e segreti degni delle migliori serie TV!",
    },
  ];

  const navbarOnSCroll = () => {
    if (window.pageYOffset > 25) {
      setNav(true);
    } else {
      setNav(false);
    }

    if (window.scrollY)
    {setSmart (false);}
  };

  useEffect(() => {
    document.addEventListener("scroll", navbarOnSCroll);
  }, []);

  const displayMenu = () => {
    setSmart(!smartmenu);
  };

  const closeMenu = () => {
    setSmart(false);
  };

  //const [user, setUser] = useState({name:"", email:""});
  //const [error, setError] = useState("");

  /*const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("logged in");
      
      setUser({
        name: details.name,
        email: details.email,
      });

    } else {
      console.log("details do not match");
      setError("Password o e-mail incorretta.");
    }
  }

  const Logout = () =>{
    setUser({ name: ""});
    setUser({ email: ""});
    console.log("Logout");
  }*/

  return (

    <Router>

        <Nav navbar={navbar} smartmenu={smartmenu} displayMenu={displayMenu} click={click} handleClick={handleClick} closeMenu={closeMenu}/>

        <Switch>

          <Route exact path="/" component={Progetto}>
            <Progetto productCatalog={productCatalog} corsi={corsi} />
          </Route>

          <Route exact path="/Corsi" component={Corsi}>
            <Corsi corsi={corsi}/>
          </Route>

          <Route exact path="/Prodotti" component={Prodotti}>
            <Prodotti productCatalog={productCatalog} />
          </Route>

          <Route exact path="/Contatti" component={Contatti}>
            <Contatti/>
          </Route>

          {/*<Route exact path="/Login" component={LoginForm}>
            <div className="welcomeContainer">      
              {(user.email != "") ? (
                <div className="welcome  mt-auto">
                  <h2>Benvenuto, <span>{user.name}</span></h2>
                  <button onClick={Logout}>Logout</button>
                </div>) : (<LoginForm Login={Login} error={error} />
              )}
            </div>
              </Route>*/}

          {/*<Route>
            <SigninForm/>
              </Route>*/}

          {/*<Route exact path="/Login" render={() => !isLog ? <Login handleLogin={handleLogin}/> : <Progetto/>}/>
          <Route path='*' component={NoMatch}/>*/}


          {/*<Route exact path="/lo-schermo-del-master" component={Prodotto1}>
            <Prodotto1 productCatalog={productCatalog}/>
          </Route>*/}
          
        </Switch>
        
        <Footer />
        
    </Router>
  )
}

export default App;
