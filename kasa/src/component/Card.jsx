import React from 'react'

export default function Card({imageUrl, id, title})
{
    const url = `/logements/${id}`
    return(
    <a href={url} className='card'>
        <img src={imageUrl} alt = {title}/>
        <h3>{title}</h3>
    </a>
    )
}