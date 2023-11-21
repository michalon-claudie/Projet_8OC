import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import apartments from '../logements.json'
import Slideshow from '../component/Slideshow'
import { useParams } from 'react-router-dom'
import Collapse from '../component/Collapse'

export default function Apartment()
{
    const { id } = useParams();
    const currentApartment = apartments.find(apartment => apartment.id === id)

    console.log('id',id)
    console.log('currentApartment',currentApartment)

    const description = currentApartment ? currentApartment.description : "";

    return (
        <div>
            <Header/>
            {currentApartment && currentApartment.pictures && (
                <Slideshow picturesList={currentApartment.pictures} />
            )} 
            <Collapse
                title='Description'
                content={description}
            />
            <Footer/>
        </div>
    )
}