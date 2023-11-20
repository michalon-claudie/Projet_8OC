import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import apartments from '../logements.json'
import Slideshow from '../component/Slideshow'
import { useParams } from 'react-router-dom'

export default function Apartment()
{
    const { id } = useParams();
    const currentApartment = apartments.find(apartment => apartment.id === parseInt(id))

    console.log('id',id)
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