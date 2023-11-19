import React ,{ useState } from 'react'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'

export default function Slideshow({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 1) % pictures.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + pictures.length) % pictures.length;
    setCurrentIndex(prevIndex);
  };
  return (
    <div className='Slideshow'>
      <img src={arrowLeft} alt='Previous' onClick={goToPrevSlide} />
          {pictures.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
          ))}
      <img src={arrowRight} alt='NextImage' onClick={goToNextSlide} />
    </div>
  );
}