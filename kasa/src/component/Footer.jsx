import React from 'react'
import "../style/components/footer.scss"
import logo from '../assets/LOGO_white.png'

export default function Footer()
{
    return (
        <div className='Footer'>
            <img src={logo} alt='logo_kasa'/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}