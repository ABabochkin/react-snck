
import React from "react";
import Card from '../components/Card';

function Home ({
    items,
    cartItems,
    searchValue,
    setSearchValue,
    onChangeSearchValue,
    addToFavorite,
    addToCard,
    isLoading
}) 

    {
        const renderItems = () => {
            const filtredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
            );
            return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => addToFavorite(obj)}
                onPlus={(obj) => addToCard(obj)}
                loading={isLoading}
                {...item}
            />
            ));
        };
        
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
            {renderItems()}  
            </div>
        </div>
    )
}

export default Home;