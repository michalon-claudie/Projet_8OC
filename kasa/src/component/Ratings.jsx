import React from 'react'
import grey_star from '../assets/grey_star.png'
import pink_star from '../assets/pink_star.png'

export default function generateStars(rating){
    const ratingNumber = Math.round(parseFloat(rating));
  
    return Array.from({ length: 5 }).map((_, index) => (
      <img
        key={index}
        src={index < ratingNumber ? pink_star : grey_star}
        alt={index < ratingNumber ? 'star' : 'empty-star'}
      />
    ));
  };