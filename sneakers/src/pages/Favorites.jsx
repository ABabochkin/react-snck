import React from 'react'
import Card from '../components/Card'

function Favorites ({items, addToFavorite}) {
    return (
        <div className="content" >
            <div className='search'>
                { items.length > 0 ? <h1>Мои закладки</h1> : <h1>Тут пусто:(</h1> }
            </div>

            <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '30px'}}>

                {items.map((item, index) => (
                        <Card
                            key={index}
                            favorited = {true}
                            onPlusFavorite = {addToFavorite} 
                            {...item}
                        />
                    ))}  
            </div>
        </div>
        
    )
}

export default Favorites