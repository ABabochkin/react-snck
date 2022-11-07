import React, { useContext } from 'react';
import AppContext from '../AppContext';
import Card from '../components/Card';


function Favorites () {

    const {favoriteItems, addToFavorite} = useContext(AppContext)

    return (
        <div className="content" >
            <div className='search'>
                <h1>Мои закладки</h1>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '30px'}}>

                {favoriteItems.map((item, index) => (
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