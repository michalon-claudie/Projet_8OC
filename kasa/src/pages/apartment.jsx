import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
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
    const navigate = useNavigate()

    console.log('id',id)
    console.log('currentApartment',currentApartment)

    useEffect(() => {
      if (!currentApartment) {
          navigate("*")
      }
  }, [currentApartment, navigate])

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
      <section className='informationLocation'>
        <div className='titleAndTagsContainer'>
          <div className='TitleLocation'>
            <h1>{title}</h1>
            <p>{location}</p>
          </div>
          <div className='tags'>
            {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>))}
          </div>
        </div>
        <div className="ratingAndHostSection">
          <div className='host'>
            <h3>{host.name}</h3>
            <img src={host.picture} alt='Host Picture'/>
          </div>
          <div className='ratingStars'>
            {generateStars(rating)}
          </div>
        </div>
      </section>
      <section className='theTwoCollapse'>
      <Collapse
          title='Description'
          content={description}
      />
      <Collapse
          title="Equipments"
          content={
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>
                    {equipment}
                </li>
              ))}
            </ul>
          }
      />
      </section>
      <Footer/>
    </div>
  )
}