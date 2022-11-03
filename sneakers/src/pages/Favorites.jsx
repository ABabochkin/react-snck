import React from 'react';
import Card from '../components/card/Card';
import {Link} from 'react-router-dom';


function Favorites ({items, addToFavorite, removeFavorites}) {
    return (
        <div className="content" >
            <div className='search'>
                { items.length > 0 ? 
                    <h1>Мои закладки</h1> 
                        : 
                            <div className='noFavorites'>
                                <img src='./images/unfav.png' alt='fav'/>
                                <h2>Закладок нет :(</h2>
                                <p>Вы ничего не добавляли в закладки</p>
                                <Link to='/'>
                                    <button className='favorButton' >
                                        <img height={13} width={13} src='./images/buttonRotate.png' alt='btnRotate'/>  Вернуться назад 
                                    </button>
                                </Link>
                                
                            </div> }

            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '30px'}}>

                {items.map((item) => (
                        <Card
                            key={item.Image}
                            title = {item.title}
                            price = {item.price}
                            Image = {item.Image}
                            favorited = {true}
                            onPlusFavorite = {addToFavorite} 
                            removeFavorites={removeFavorites}
                        />
                    ))}  
            </div>
        </div>
        
    )
}

export default Favorites