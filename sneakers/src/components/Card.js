import React from 'react'

export default function Card() {
    return (
    <div className='card' >
        <img width={133} header={112} src='./images/1.jpg'  alt='sneakers' />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='card-bottom'>
            <div className='card-info'>
                <span>ЦЕНА:</span>
                <b>12 999 руб.</b>
            </div>
        <button className='button' >
        <img width={11} height={11} src='./images/plus.svg' alt='plus' />
        </button>
        </div>
    </div>
    )
}
