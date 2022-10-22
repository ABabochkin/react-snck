import React from 'react'

export default function Drawer(props) {
return (

    <div className='overlay'>
    <div className='drawer' >
        <div className='cartClose'>
            <h2>Корзина</h2>
            <button className='btnClose' onClick={props.onClick} >
                <img src='./images/remove.png' alt='close' />
            </button>
        </div>
        <div className='items'>

            <div className='cardItem'>
                <img style={{marginRight: '20px'}} width={70} height={70} src='./images/2.jpg' alt='snk'/>
                <div style={{marginRight: '20px'}} >
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <button className='removeBtn' >
                    <img width={11} height={11} src='./images/remove.png'  alt='removeBtn' />
                    </button>
            </div>

            <div className='cardItem'>
                <img style={{marginRight: '20px'}} width={70} height={70} src='./images/2.jpg' alt='snk'/>
                <div style={{marginRight: '20px'}} >
                    <p>Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                </div>
                <button className='removeBtn' >
                    <img width={11} height={11} src='./images/remove.png'  alt='removeBtn' />
                </button>
            </div>

        </div>

    <div className='cardTotalBlock'>
        <ul>
            <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
            </li>
            <li>
                <span>Налог 5%: </span>
                <div></div>
                <b>1074 руб. </b>
            </li>
            <button className='buttonCheck'>Оформить заказ</button>
            <img src='./images/btn.png'  alt='btn'/>
        </ul>
    </div>
</div>
</div>
)
}
