import React from 'react'

import Carousel from "react-bootstrap/Carousel";
import "./ProductSlideshow.css";
import { Link } from "react-router-dom";

const ProductSlideshow = ({ productCatalog }) => {
  return (
<<<<<<< HEAD

=======
    <div className="row">
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
    <Carousel className="carouselProductContainer">

    {productCatalog.map((product) => (
      <Carousel.Item className="carouselProductItems rounded bg-transparent">
<<<<<<< HEAD
        <div className="imageSpace col-md-3">
        <img
          className="carouselProductImages d-block circular" /*circular slideshow shadow*/
=======
        <div className="imageSpace col-md-4">
        <img
          className="carouselProductImages d-block circular slideshow shadow"
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
          style={{overflow: "hidden"}}
          src={product.image}
          alt={product.position}
        />
        </div>
        
        <Carousel.Caption className="productInfo">
          <div className="productTextSpace col-md-12">

            <h1 className="productName">{product.name}</h1>        
            <h3 className="productDescription">{product.description2}</h3>

            <Link to="/Prodotti" className="continueButton btn btn-lg btn-danger rounded-pill">
              <h1 className="btnTXT">Continua</h1>
            </Link>
<<<<<<< HEAD

          </div>

        </Carousel.Caption>
=======
          </div>

        </Carousel.Caption>

>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
      </Carousel.Item>
      ))}

    </Carousel>
<<<<<<< HEAD

=======
    </div>
>>>>>>> ed4d1b40d30057484339b1ed4469bbbbbbbea3c8
  );
};
export default ProductSlideshow;
