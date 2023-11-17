import React from 'react'
import Card from '../component/Card'
import '../style/components/cards.scss'

export default function Cards({cards})
{
    return(
    <div className='cardsContainer'>
        {
            cards.map(e => (
                <Card key = {e.id} imageUrl={e.cover} title={e.title} id ={e.id}/> 
            ))
        }
    </div>
    )
}