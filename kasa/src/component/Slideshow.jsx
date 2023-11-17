import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Slideshow({ pictures}) {
    return (
      <div className='Slideshow'>
        <Carousel>
          {pictures.map((index) => (
            <div key={index}>
              <img src={pictures} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }