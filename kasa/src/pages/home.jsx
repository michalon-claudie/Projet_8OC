import React from 'react'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Footer from '../component/Footer'

export default function Home()
{
    return (
        <div>
            <Header/>
            <Banner/>
            <h1>Bienvenue sur la page d'acceuil</h1>
            <Footer/>
        </div>
    )
}