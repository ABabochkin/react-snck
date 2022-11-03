
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header'
//import Card from './components/Card'
import Drawer from './components/drawer/Drawer'
import  {useState}  from 'react';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App( ) {

  const [items, setItems] = useState ([
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб. ', Image: './images/1.jpg', id: 1 },
    {name: 'Мужские Кроссовки Nike Air Max 270', price: '12 999 руб.', Image: './images/2.jpg', id: 2 },
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499 руб.', Image: './images/3.jpg', id: 3 },
    {name: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999 руб.', Image: './images/4.jpg', id:'4' },
    {name: 'Мужские Кроссовки Under Armour Curry 8', price: '15 199 руб.', Image: './images/5.jpg', id:'5' },
    {name: 'Мужские Кроссовки Nike Kyrie 7', price: '11 299 руб.', Image: './images/6.jpg', id:'6' },
    {name: 'Мужские Кроссовки Jordan Air Jordan 11', price: '10 799 руб.', Image: './images/7.jpg', id:'7' },
    {name: 'Мужские Кроссовки Nike LeBron XVIII', price: '16 499 руб.', Image: './images/8.jpg', id:'8' },
]) 


  //const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);



  
  const addFavorites = (obj) => {
    setFavoriteItems(prev => [...prev, obj ])
  }

  const removeFavorites = (Image) => {
      setFavoriteItems((prev) => prev.filter((item) => item.Image !== Image ))
  } 


  const addToCard = (obj) => {
    setCartItems(prev => [...prev, obj]) 
  }


  const onRemoveItem = (Image) => {
    setCartItems((prev) => prev.filter((item) => item.Image !== Image))
  }

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }


  
  return (
    <div className="wrapper">
      { cartOpened ? <Drawer items={cartItems} onClose = {() => setCartOpened(false) } onRemoveItem = {onRemoveItem}   /> : null }
      <Header onClick = {() => setCartOpened(true)} /> 
      

      <Routes>
        <Route exact path='/' element = { 
          <Home 
            items = {items} 
            searchValue={searchValue} 
            onChangeSearchValue={onChangeSearchValue}
            setSearchValue={setSearchValue} 
            //addToFavorite={addToFavorite}
            addFavorites={addFavorites}
            addToCard={addToCard}
            removeFavorites={removeFavorites}
          />}
        />
        <Route path='/favorites' element = { 
          <Favorites
            items = {favoriteItems}
            addFavorites={addFavorites}
            removeFavorites={removeFavorites}
            //addToFavorite={addToFavorite}
          />}  

        />
      </Routes>

    </div>
  );
}

export default App;
