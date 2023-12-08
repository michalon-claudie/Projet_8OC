import React ,{ useState , useEffect} from 'react'
import arrowLeft from '../assets/arrowLeft.png'
import arrowRight from '../assets/arrowRight.png'
import  '../style/components/slideshow.scss'

export default function Slideshow({ picturesList }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(picturesList[0]);
  

  console.log('currentImage:', currentImage);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % picturesList.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + picturesList.length) % picturesList.length);
  };

  useEffect(() => {
    setCurrentImage(picturesList[currentIndex]);
  }, [currentIndex, picturesList]);

  return (
    <div className='Slideshow'>
      <img src={arrowLeft} alt='Previous' onClick={goToPrevSlide} className='arrow arrow_left'/>
      <img src={currentImage} alt={`Image ${currentIndex + 1}`} className='picturesSlideshow'/>
      <img src={arrowRight} alt='NextImage' onClick={goToNextSlide} className='arrow arrow_right'/>
      <p className="imageCounter">{currentIndex + 1}/{picturesList.length}</p>
    </div>
  );
}