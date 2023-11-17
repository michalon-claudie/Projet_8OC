import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'
import apartments from '../logements.json'

export default function Slideshow({}){
    return (
        <Carousel>
        {{apartments}.map((pictures, index) => (
          <div key={index}>
            <img src={pictures} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    )
}