import React from 'react'

export default function Header(props ) {

    return (
    <header>
        <div className="header-left">
            <img width={40} height={40} src="./images/logo.png" alt="logo"/>
            <div>
                <h3>REACT SNEAKERS</h3>
                <p>Магазин лучших кроссовок</p>
            </div>
        </div>
        <ul>
            <li style={{marginRight: '30px'}}>
                <img 
                    width={18} 
                    height={18} 
                    src="./images/cart1.svg" 
                    alt="cart"
                    onClick={props.onClick}
                />
                <span> 1250 руб. </span>
            </li>
            <li style={{marginRight: '20px'}} >
                <img width={18} height={18} src="./images/like.png" alt="like"/>
            </li>
            <li>
                <img width={18} height={18} src="./images/man.svg" alt="profile"/>
            </li>
        </ul>
    </header>
)
}
