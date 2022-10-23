import React from 'react'

export default function Drawer({onClose, items = [], onRemove, title, price, Image, }) {
return (
    <div className='overlay'>
    <div className='drawer' >
        <div className='cartClose'>
            <h2>Корзина</h2>
            <button className='btnClose' onClick={onClose} >
                <img src='./images/remove.png' alt='close' />
            </button>
        </div>
        <div className='items'>

            {items.map((obj) => (
            <div className='cardItem'>
                <img style={{marginRight: '20px'}} width={70} height={70} src={obj.Image} alt='snk'/>
                <div style={{marginRight: '20px'}} >
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                </div>
                <button className='removeBtn'  onClick={() => onRemove(obj.id) }  >
                    <img width={11} height={11} src='./images/remove.png'  alt='removeBtn' />
                </button>
            </div>
            ))}
        

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
