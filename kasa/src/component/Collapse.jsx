import React, {useState} from 'react'
import arrow_up from "../assets/arrow_up.png"
import arrow_down from "../assets/arrow_down.png"

export default function Collapse({title, content}){
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='Collapse'>
            <div className='CollapseHeader' onClick={toggleCollapse}>
                <h3>{title}</h3>
                <img src={isOpen ? arrow_up:arrow_down} alt={isOpen? arrow_up:arrow_down}/>
            </div>
            {isOpen&& (
                <div className='CollapseContent'>
                    {content}
                </div>
            )}
        </div>
    )
}