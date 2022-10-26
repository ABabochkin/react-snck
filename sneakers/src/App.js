
import {Routes, Route} from 'react-router-dom';

import axios from 'axios'
import Header from './components/Header'
//import Card from './components/Card'
import Drawer from './components/Drawer'
import { useEffect, useState } from 'react';

import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App( ) {

  /* const arr = [
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб.', Image: './images/1.jpg'},
    {name: 'Мужские Кроссовки Nike Air Max 270', price: '12 999 руб.', Image: './images/2.jpg'},
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499 руб.', Image: './images/3.jpg'},
    {name: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999 руб.', Image: './images/4.jpg'},
    {name: 'Мужские Кроссовки Under Armour Curry 8', price: '15 199 руб.', Image: './images/5.jpg'},
    {name: 'Мужские Кроссовки Nike Kyrie 7', price: '11 299 руб.', Image: './images/6.jpg'},
    {name: 'Мужские Кроссовки Jordan Air Jordan 11', price: '10 799 руб.', Image: './images/7.jpg'},
    {name: 'Мужские Кроссовки Nike LeBron XVIII', price: '16 499 руб.', Image: './images/8.jpg'},
] */


  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
        axios.get('https://63544c7ae64783fa8282d85a.mockapi.io/items')
          .then((res) => {
            setItems(res.data)
          });

        axios.get('https://63544c7ae64783fa8282d85a.mockapi.io/cart')
          .then((res) => {
            setCartItems(res.data)
          });  

          axios.get('https://63544c7ae64783fa8282d85a.mockapi.io/favorites')
          .then((res) => {
            setFavoriteItems(res.data)
          });  

  }, []);

  

  const addToCard = (obj) => {
    axios.post('https://63544c7ae64783fa8282d85a.mockapi.io/cart', obj)
    .then(res => setCartItems(prev => [...prev, res.data]))  
  }

  const addToFavorite = (obj) => {
    axios.post('https://63544c7ae64783fa8282d85a.mockapi.io/favorites', obj)
    setFavoriteItems((prev) => [...prev, obj])
  }

  

  const onRemoveItem = (id) => {
    axios.delete(`https://63544c7ae64783fa8282d85a.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }


  
  return (
    <div className="wrapper">
      { cartOpened ? <Drawer items={cartItems} onClose = {() => setCartOpened(false) } onRemove = {onRemoveItem}   /> : null }
      <Header onClick = {() => setCartOpened(true)} /> 
      

      <Routes>
        <Route exact path='/' element = { 
          <Home 
            items = {items} 
            searchValue={searchValue} 
            onChangeSearchValue={onChangeSearchValue}
            setSearchValue={setSearchValue} 
            addToFavorite={addToFavorite}
            addToCard={addToCard}
          />}
        />
        <Route path='/favorites' element = { 
          <Favorites
            items = {favoriteItems}
            addToFavorite={addToFavorite}
          /> 
          }  

        />
      </Routes>

    </div>
  );
}

export default App;
