import React, { useState } from 'react'

export default function Card({title, price, Image, onPlus, index}) {

    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const onClickPlus = () => {
        onPlus({title, price, Image})
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
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
                <b> {price} </b>
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
