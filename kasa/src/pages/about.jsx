import React from 'react'
import { useLocation } from "react-router-dom"
import Header from '../component/Header'
import Banner from '../component/Banner'

export default function About()
{
    const location = useLocation()
    return (
        <div>
            <Header/>
            <Banner location={location}/>
            <h1>A propos</h1>
        </div>
    )
}