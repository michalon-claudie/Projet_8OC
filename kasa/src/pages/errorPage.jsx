import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import '../style/pages/error.scss'

export default function Error()
{
    return (
        <div>
            <Header/>
            <div className='errorBody'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <a href="/">Retournez sur la page d'accueil</a>
            </div>
            <Footer/>
        </div>
    )
}