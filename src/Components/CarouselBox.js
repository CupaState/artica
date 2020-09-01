import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";

import carousel1 from "../assets/carousel/carousel1.png";
import carousel2 from "../assets/carousel/carousel2.png";
import carousel3 from "../assets/carousel/carousel3.png";
import carousel4 from "../assets/carousel/carousel4.png";

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            src={carousel1}
            alt="carousel1"
            className="d-block w-100 h-100"
            onClick={ () => {window.open('/facades')}}
          />
           <Carousel.Caption>
          <h3>
            Роспись фасадов
          </h3>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="carousel2"
            onClick={ () => {window.open('/interiors')}}
          />
           <Carousel.Caption>
          <h3>
            Оформление интерьеров
          </h3>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="carousel3"
            onClick={ () => {window.open('/restoration')}}
          />
           <Carousel.Caption>
          <h3>
            Реставрация
          </h3>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel4}
            alt="carousel4"
            onClick={ () => {window.open('/airbrushing')}}
          />
           <Carousel.Caption>
          <h3>
            Аэрография на авто и мото
          </h3>
        </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    );
  }
}

export default CarouselBox;