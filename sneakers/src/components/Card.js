import React, { useState } from 'react';
import ContentLoader from "react-content-loader"

export default function Card({
    id, 
    title, 
    price, 
    Image, 
    onPlus, 
    onPlusFavorite, 
    favorited = false, 
    added = false,
    loading
    }) {

    const [isAdded, setIsAdded] = useState(added);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const onClickPlus = () => {
        onPlus({id, title, price, Image})
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        onPlusFavorite({id, title, price, Image})
        setIsFavorite(!isFavorite)
    }


    return (

    
    <div className='card'>

    {loading ? (
        <ContentLoader 
            speed={1.5}
            width={150}
            height={220}
            viewBox="0 0 150 220"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
        <rect x="0" y="0" rx="5" ry="5" width="150" height="91" /> 
        <rect x="0" y="107" rx="5" ry="5" width="150" height="15" /> 
        <rect x="0" y="144" rx="5" ry="5" width="93" height="15" /> 
        <rect x="166" y="263" rx="0" ry="0" width="1" height="0" /> 
        <rect x="3" y="192" rx="6" ry="6" width="80" height="24" /> 
        <rect x="506" y="437" rx="0" ry="0" width="102" height="52" /> 
        <rect x="114" y="186" rx="21" ry="21" width="32" height="32" />
        </ContentLoader>
    )   
        : (
    <>
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
    </>
    )
    }
    </div>
    )
}
