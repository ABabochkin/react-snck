import React, { useState } from 'react'

export default function Card(props) {

    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }


    return (
    <div className='card' >
        <img width={133} header={112} src={props.Image}  alt='sneakers' />
        <h5> {props.title} </h5>
        <div className='card-bottom'>
            <div className='card-info'>
                <span>ЦЕНА:</span>
                <b> {props.price} </b>
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
