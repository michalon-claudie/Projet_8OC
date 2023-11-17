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
            <Cards cards={apartments}/>
            <Footer/>
        </div>
    )
}