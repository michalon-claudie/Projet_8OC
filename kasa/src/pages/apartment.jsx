import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import apartments from '../logements.json'
import Slideshow from '../component/Slideshow';

export default function Apartment()
{
    return (
        <div>
            <Header/>
            {apartments.map((logement) => (
                <div key={logement.id}>
                <Slideshow pictures={logement.pictures} />
            </div>
        ))}
            <Footer/>
        </div>
    )
}