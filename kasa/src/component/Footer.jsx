import React from 'react'
import "../style/components/footer.scss"
import logoWhite from '../assets/LOGO_white.png'

export default function Footer()
{
    return (
        <div className='Footer'>
            <img src={logoWhite} alt='logo_kasa_white'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}