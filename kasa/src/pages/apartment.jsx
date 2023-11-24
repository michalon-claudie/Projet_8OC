import React from 'react'
import { useParams } from 'react-router-dom'
import '../style/pages/Apartment.scss'
import Header from '../component/Header'
import Footer from '../component/Footer'
import apartments from '../logements.json'
import Slideshow from '../component/Slideshow'
import Collapse from '../component/Collapse'
import generateStars from '../component/Ratings'

export default function Apartment()
{
    const { id } = useParams();
    const currentApartment = apartments.find(apartment => apartment.id === id)

    console.log('id',id)
    console.log('currentApartment',currentApartment)

    const description = currentApartment ? currentApartment.description : "";
    const equipments = currentApartment ? currentApartment.equipments:"";
    const rating = currentApartment ? currentApartment.rating : 0;
    const tags = currentApartment ? currentApartment.tags : "";
    const title = currentApartment ? currentApartment.title : "";
    const location = currentApartment ? currentApartment.location : "";
    const host = currentApartment ? currentApartment.host : "";


  return (
    <div>
      <Header/>
      {currentApartment && currentApartment.pictures && (
      <Slideshow picturesList={currentApartment.pictures} />
      )} 
      <h1>{title}</h1>
      <p>{location}</p>
      <div className='hostContainer'>
        <h3>{host.name}</h3>
        <img src={host.picture} alt='Host Picture'/>
      </div>
      <section className="ratingAndTagsSection">
        <h3>Rating:</h3>
        {generateStars(rating)}
        {tags.map((tag, index) => (
        <span key={index} className="tag">{tag}</span>))}
      </section>
      <section className='theTwoCollapse'>
      <Collapse
          title='Description'
          content={description}
      />
      <Collapse
          title="equipments"
          content={equipments}
      />
      </section>
      <Footer/>
    </div>
  )
}