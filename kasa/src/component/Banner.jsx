import React from 'react'
import "../style/components/banner.scss"

const bannerImages = {
    "/": {
        image: require("../assets/Image source 1.png"),
        text: "Chez vous, partout et ailleurs",
    },
    "/about": {
        image: require("../assets/Image source 2.png"),
        text: "",
    },
}

export default function Banner({location})
{
    const currentPath = location.pathname
    const { image, text } = bannerImages[currentPath]
    return (
        <div className='Banner'>
            <img src={image} alt='picture_banner'/>
            {currentPath === "/" && <h1>{text}</h1>}
        </div>
    )
}