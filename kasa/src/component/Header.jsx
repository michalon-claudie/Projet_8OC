import React from 'react'
import "../style/components/header.scss"
import logo from '../assets/LOGO.png'

export default function Header()
{
    return (
        <div className='header'>
            <img src={logo} alt='logo_kasa'/>
            <ul className='nav_header'>
                <li>
                   Acceuil 
                </li>
                <li>
                    A propos
                </li>
            </ul>
        </div>
    )
}