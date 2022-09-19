import React from 'react'

import Flippy, { FrontSide, BackSide } from "react-flippy";
import "./ProductSlideshow.css";
<<<<<<< HEAD
import "./Cards.css";
=======
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8

import Button from 'react-bootstrap/Button';


function Prodotti({ product }) {
  console.log(product.image);
  return (
    <div className="my-5">
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        src={product.image} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        style={{ width: "300px", height: "400px" }} /// these are optional style, it is not necessary
      >
        <FrontSide
          style={{
            backgroundColor: "#41669d",
          }}
          className="p-0 mx-0 rounded "
        >
          <div className="container-fluid m-0 p-0">
            <img
<<<<<<< HEAD
              src={product.image}
              className="cardImage"
=======
              src=".\media\alabarda_spaziale.jpg"
              className="img-fluid"
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
              alt=""
            />
          </div>

          <div className="py-3">
            <h4 className="prodTitle">{product.name}</h4>

            <div className="prodContainer">
              <Button className="prodButton w-50 h-50">Volta la carta</Button>
            </div>
          </div>

        </FrontSide>

<<<<<<< HEAD
        <BackSide style={{ backgroundColor: "#175852", color: "#fff", textAlign: "center"}} className="rounded ">
=======
        <BackSide style={{ backgroundColor: "#175852", textAlign: "center"}} className="rounded ">
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
          {" "}
          <div className="py-3">
            <h4 id="prodTitleBack title">{product.name}</h4>
            <p id="prodDescriptionBack description">{product.description}</p>
            {/*<h2 style={{textAlign: "center", color: "white"}}id="title" className="prodPriceBack">{product.price}</h2>*/}
            {/*<a href="http://localhost:3000/Lo-schermo-del-master">
              <button className="prodButtonBack mt-5 btn btn-lg btn-danger rounded-pill">Specifiche</button>
            </a>*/}
          </div>

        </BackSide>
      </Flippy>
    </div>
  );
}

export default Prodotti;

