import React ,{ useState } from 'react'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'
import  '../style/components/slideshow.scss'

export default function Slideshow({ picturesList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = picturesList[0]

  console.log('currentImage:', currentImage);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % picturesList.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + picturesList.length) % picturesList.length);
  };
  return (
    <div className='Slideshow'>
      <img src={arrowLeft} alt='Previous' onClick={goToPrevSlide} className='arrow'/>
      <img src={currentImage} alt={`Image ${currentIndex + 1}`} />
      <img src={arrowRight} alt='NextImage' onClick={goToNextSlide} className='arrow'/>
    </div>
  );
}