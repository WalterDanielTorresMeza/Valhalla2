import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../App.css';

import img1 from '../styles/assets/images/6.jpg';

const CarouselComponent = () => {
  return (
    <Carousel className='custom-carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>El Diu</h3>
          <p>Sacando navaja.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>

        <img
          className="d-block w-100"
          src="https://esports.as.com/2021/12/16/bonus/influencers/Equipo-LoL-Koi_1529257075_866752_1331x600.jpg"
          alt="Second slide"
        />
        
        <Carousel.Caption>
          <h3>Gerita</h3>
          <p>Sacando la penta.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Agregar más items según sea necesario */}
    </Carousel>
  );
}

export default CarouselComponent;
