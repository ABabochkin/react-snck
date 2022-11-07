import React, { useState } from 'react'

export default function Card({id, title, price, Image, onPlus, onPlusFavorite, favorited = false, added = false }) {

    const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({id, title, price, Image})
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onPlusFavorite({id, title,price,Image})
        setIsFavorite(!isFavorite)

    }


    return (
    <div className='card'>
        <img
            className='favorite' 
            src={isFavorite ? './images/favorite.png' : './images/noFavorite.png'} 
            alt='like' 
            onClick={onClickFavorite} />
            
        <img width={133} header={112} src={Image}  alt='sneakers' />
        <h5> {title} </h5>
        <div className='card-bottom'>
            <div className='card-info'>
                <span>ЦЕНА:</span>
                <b> {price} руб. </b>
            </div>
        
            <img
                width={32} height={32}
                src={isAdded ? './images/btn-checked.svg' : './images/plus.png' }
                alt='plus'
                style={{cursor: 'pointer'}}
                onClick={onClickPlus}
            />
        </div>
    </div>
    )
}
