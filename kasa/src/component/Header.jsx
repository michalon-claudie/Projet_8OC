import React from 'react'
import "../style/components/header.scss"
import logo from '../assets/LOGO.png'
import { Link,useLocation} from "react-router-dom"

export default function Header()
{
    const location =useLocation();
    return (
        <div className='header'>
            <img src={logo} alt='logo_kasa'/>
            <ul className='nav_header'>
                <li>
                    <Link to={'/'} className={`link ${location.pathname === "/" ? "active" : ""}`}>
                        Accueil 
                    </Link>
                </li>
                <li>
                    <Link to={"/about"} className={`link ${location.pathname === "/about" ? "active" : ""}`}>
                        A propos
                    </Link>
                </li>
            </ul>
        </div>
    )
}