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
                <Slideshow key={logement.id} pictures={logement.pictures} />
            ))}
            <Footer/>
        </div>
    )
}