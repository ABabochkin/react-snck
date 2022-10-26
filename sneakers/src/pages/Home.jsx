
import React from "react";
import Card from '../components/Card';

function Home ({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchValue,
    addToFavorite,
    addToCard
}) {
    return (
        <div className="content" >
            <div className='search' >
            <h1>{ searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все Кроссовки'}</h1>
                <div className='search-block'>
                    <img src='./images/search.svg' alt='search' />
                    <input onChange={onChangeSearchValue} value={searchValue} placeholder='Поиск...' />

            { searchValue ?
                <img
                    className='removeInput' 
                    width={15} height={15} 
                    src='./images/remove.png' 
                    alt='removeBtn' 
                    onClick={() => setSearchValue('') } 
                />
                : null  }

                </div>
            </div>
            <div style={{display: 'flex', flexWrap: 'wrap', marginLeft: '30px'}}>
        
            {items
                .filter((item) => item.name.toLowerCase().includes(searchValue))
                .map((item) => (
                    <Card
                        key={item.Image}
                        title = {item.name}
                        price = {item.price}
                        Image = {item.Image}
                        onPlus = {(obj) => addToCard(obj)}
                        onPlusFavorite = {(obj) => addToFavorite(obj)}
                        // added = {cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                    />
                ) )}  
            </div>
        </div>
    )
}

export default Home;