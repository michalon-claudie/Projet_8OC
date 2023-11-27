import React, {useState} from 'react'
import arrow_up from "../assets/arrow_up.png"
import arrow_down from "../assets/arrow_down.png"
import '../style/components/Collapse.scss'

export default function Collapse({title, content}){
    const [isOpen, setIsOpen] = useState(false)
    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='Collapse'>
            <div className='CollapseHeader' onClick={toggleCollapse}>
                <h3>{title}</h3>
                <img src={isOpen ? arrow_down:arrow_up} alt={isOpen? arrow_down:arrow_up} className='arrow'/>
            </div>
            {isOpen&& (
                <div className='CollapseContent'>
                    {content}
                </div>
            )}
        </div>
    )
}