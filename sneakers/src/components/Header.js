import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(props ) {

    return (
    <header>
            <div className="header-left">
                <Link to = '/' >
                    <img width={40} height={40} src="./images/logo.png" alt="logo"/>
                </Link>
                
                <div>
                    <h3>BEST SNEAKERS</h3>
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
                <Link to = '/favorites' >
                    <img width={18} height={18} src="./images/like.png" alt="like"/>
                </Link>
            </li>
            <li>
                <img width={18} height={18} src="./images/man.svg" alt="profile"/>
            </li>
        </ul>
    </header>
)
}
