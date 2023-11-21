import React from 'react'
import { useParams } from 'react-router-dom'
import '../style/pages/Apartment.scss'
import Header from '../component/Header'
import Footer from '../component/Footer'
import apartments from '../logements.json'
import Slideshow from '../component/Slideshow'
import Collapse from '../component/Collapse'

export default function Apartment()
{
    const { id } = useParams();
    const currentApartment = apartments.find(apartment => apartment.id === id)

    console.log('id',id)
    console.log('currentApartment',currentApartment)

    const description = currentApartment ? currentApartment.description : "";
    const equipments = currentApartment ? currentApartment.equipments:"";

    return (
        <div>
            <Header/>
            {currentApartment && currentApartment.pictures && (
                <Slideshow picturesList={currentApartment.pictures} />
            )} 
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