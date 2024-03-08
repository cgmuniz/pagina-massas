import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import './opCarousel.css'

import carousel1 from '../../img/home/slider/carousel1.jpg'
import carousel2 from '../../img/home/slider/carousel2.jpg'
import carousel3 from '../../img/home/slider/carousel3.jpg'
import carousel4 from '../../img/home/slider/carousel4.png'
import carousel5 from '../../img/home/slider/carousel5.jpeg'
import carousel6 from '../../img/home/slider/carousel6.jpg'
import carousel7 from '../../img/home/slider/carousel7.jpg'

function OpeningCarousel() {
  return (
    <div className='carouselteste' style={{display: 'block', marginTop:70, marginBottom:100}}>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className='imgCarousel'
            src={carousel1}
            alt="Lab"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='imgCarousel'
            src={carousel2}
            alt="Lab"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='imgCarousel'
            src={carousel3}
            alt="Lab"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='imgCarousel'
            src={carousel4}
            alt="Lab"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='imgCarousel'
            src={carousel6}
            alt="Lab"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='imgCarousel'
            src={carousel5}
            alt="Lab"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='imgCarousel'
            src={carousel7}
            alt="Lab"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default OpeningCarousel