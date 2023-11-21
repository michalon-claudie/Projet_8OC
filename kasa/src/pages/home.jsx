import React from 'react'
import { useLocation } from "react-router-dom"
import apartments from '../logements.json'
import Header from '../component/Header'
import Banner from '../component/Banner'
import Footer from '../component/Footer'
import Cards from '../component/Cards'

export default function Home()
{
    const location = useLocation()
    return (
        <div>
            <Header/>
            <Banner location={location}/>
            <Cards cards={apartments}/>
            <Footer/>
        </div>
    )
}