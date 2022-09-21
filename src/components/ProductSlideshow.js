import React from 'react'

import Carousel from "react-bootstrap/Carousel";
import "./ProductSlideshow.css";
import { Link } from "react-router-dom";

const ProductSlideshow = ({ productCatalog }) => {
  return (
    <Carousel className="carousel">

        {productCatalog.map((product) => (
          <Carousel.Item>
            <div className="carouselProductContainer">
                <div className='image'>
                <img
                  className="carouselProductImages d-block circular" /*circular slideshow shadow*/
                  style={{overflow: "hidden"}}
                  src={product.image}
                  alt={product.position}
                />        
                </div>
                
                <div className="productInfo">
                  <h1 className="productName">{product.name}</h1>        
                  <h3 className="productDescription">{product.description2}</h3>
                    <div className='buttonContainer'>
                      <Link to="/Prodotti" className="continueButton btn btn-lg btn-danger rounded-pill">
                        <h1 className="btnTXT">Continua</h1>
                      </Link>
                    </div>
                </div>
            </div>
          </Carousel.Item>
      ))}
      
    </Carousel>
  );
};
export default ProductSlideshow;
