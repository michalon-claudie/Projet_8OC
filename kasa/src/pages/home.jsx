import React from 'react'
import apartments from '../logements.json'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Cards from '../component/Cards'

export default function Home()
{
    return (
        <div>
            <Header/>
            <Banner/>
            <h1>Bienvenue sur la page d'acceuil</h1>
            <Cards cards={apartments}/>
            <Footer/>
        </div>
    )
}