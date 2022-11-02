import React from 'react'
import Card from '../components/Card'

function Favorites ({items, addToFavorite, removeFavorites}) {
    return (
        <div className="content" >
            <div className='search'>
                { items.length > 0 ? <h1>Мои закладки</h1> : <h1>Тут пусто </h1> }
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