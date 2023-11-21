import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import apartments from '../logements.json'
import Slideshow from '../component/Slideshow'
import { useParams } from 'react-router-dom'

export default function Apartment()
{
    const { title } = useParams();
    const currentApartment = apartments.find(apartment => apartment.title === parseInt(title))

    console.log('title',title)
    console.log('currentApartment',currentApartment)

    return (
        <div>
            <Header/>
            {currentApartment && currentApartment.pictures && (
                <Slideshow picturesList={currentApartment.pictures} />
            )} 
            <Footer/>
        </div>
    )
}