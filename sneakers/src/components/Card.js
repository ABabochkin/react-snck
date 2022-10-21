import React from 'react'

export default function Card(props) {
    return (
    <div className='card' >
        <img width={133} header={112} src={props.Image}  alt='sneakers' />
        <h5> {props.title} </h5>
        <div className='card-bottom'>
            <div className='card-info'>
                <span>ЦЕНА:</span>
                <b> {props.price} </b>
            </div>
        <button className='button' >
        <img width={11} height={11} src='./images/plus.svg' alt='plus' />
        </button>
        </div>
    </div>
    )
}
