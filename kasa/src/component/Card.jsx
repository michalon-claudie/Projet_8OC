import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({imageUrl, title})
{
    const url = `/apartment/${title}`
    return(
    <Link to={url} className='card'>
        <img src={imageUrl} alt = {title}/>
        <h3>{title}</h3>
    </Link>
    )
}