import React from 'react'
import "../style/components/banner.scss"
import imgBanner from '../assets/Image source 1.png'

export default function Banner()
{
    return (
        <div className='Banner'>
            <img src={imgBanner} alt='picture_banner'/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>
    )
}