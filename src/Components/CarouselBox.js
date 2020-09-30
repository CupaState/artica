import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import ButtonUI from "./Button"
import "../css/Carousel.css"

import carousel1 from "../assets/carousel/carousel1.png";
import carousel2 from "../assets/carousel/carousel2.png";
import carousel3 from "../assets/carousel/carousel3.png";
import carousel4 from "../assets/carousel/carousel4.png";

class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item id="car-item">
          <div className="car-item-text"
            onClick={() => {window.open('/facades')}}>
            Подробнее
          </div>
          <img
            src={carousel1}
            alt="carousel1"
            className="d-block w-100 h-100"
            onClick={ () => {window.open('/facades')}}
          />
           <Carousel.Caption>
          <span className="carousel-span-text">
            Роспись фасадов
          </span>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="car-item">
          <div className="car-item-text"
            onClick={ () => {window.open('/interiors')}}
          >
            Подробнее
          </div>
          <img
            className="d-block w-100"
            src={carousel2}
            title="Подробнее"
            alt="carousel2"
            onClick={ () => {window.open('/interiors')}}
          />
           <Carousel.Caption>
          <span className="carousel-span-text">
            Оформление интерьеров
          </span>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="car-item">
          <div className="car-item-text"
            onClick={ () => {window.open('/restoration')}}
          >
            Подробнее
          </div>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="carousel3"
            title="Подробнее"
            onClick={ () => {window.open('/restoration')}}
          />
           <Carousel.Caption>
          <span className="carousel-span-text">
            Реставрация
          </span>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item id="car-item">
          <div className="car-item-text"
            onClick={ () => {window.open('/airbrushing')}}
          >
            Подробнее
          </div>
          <img
            className="d-block w-100"
            src={carousel4}
            alt="carousel4"
            title="Подробнее"
            onClick={ () => {window.open('/airbrushing')}}
          />
           <Carousel.Caption>
          <span className="carousel-span-text">
            Аэрография на авто и мото
          </span>
        </Carousel.Caption>
        </Carousel.Item>
       
      </Carousel>
    );
  }
}

export default CarouselBox;