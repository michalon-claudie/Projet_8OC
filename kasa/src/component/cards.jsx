import React from 'react'
import Card from '../component/Card'

export default function Cards({cards})
{
    return(
    <div className='cardsContainer'>
        {
            cards.map(e => (
                <Card imageUrl={e.cover} title={e.title} id ={e.id}/> 
            ))
        }
    </div>
    )
}