
import {Routes, Route} from 'react-router-dom';

import axios from 'axios'

import Header from './components/Header'
import Drawer from './components/Drawer'

import { useEffect, useState } from 'react';
import AppContext from './AppContext';

import Home from './pages/Home';
import Favorites from './pages/Favorites';



function App() {

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      async function fetchData () {

        const cartResponse = await  axios.get('https://63544c7ae64783fa8282d85a.mockapi.io/cart')
        const favoriteResponse = await axios.get('https://63544c7ae64783fa8282d85a.mockapi.io/favorites')
        const itemsResponse = await axios.get('https://63544c7ae64783fa8282d85a.mockapi.io/items')

        setIsLoading(false)
        
        setCartItems(cartResponse.data)
        setFavoriteItems(favoriteResponse.data)
        setItems(itemsResponse.data)
      }

      fetchData()
  }, []);

  const addToCard = (obj) => {
    console.log(obj)
    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://63544c7ae64783fa8282d85a.mockapi.io/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)))
    } else {
      axios.post('https://63544c7ae64783fa8282d85a.mockapi.io/cart', obj)
      setCartItems(prev => [...prev, obj])
    }

  }

  const addToFavorite = async (obj) => {
    try {
      if (favoriteItems.find(favObj => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://63544c7ae64783fa8282d85a.mockapi.io/favorites/${obj.id}`)
        setFavoriteItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const {data} = await axios.post('https://63544c7ae64783fa8282d85a.mockapi.io/favorites', obj)
        setFavoriteItems((prev) => [...prev, data])
      }
    } catch (error) {
      alert('Не удалось добавить в избранное')
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://63544c7ae64783fa8282d85a.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }
  
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id))
  }

  return (
    <AppContext.Provider value={{items, cartItems, favoriteItems, addToFavorite, isItemAdded }} >
      <div className="wrapper">
      { cartOpened ? <Drawer items={cartItems} onClose = {() => setCartOpened(false) } onRemove = {onRemoveItem}   /> : null }
      <Header onClick = {() => setCartOpened(true)} /> 
      <Routes>
        <Route exact path='/' element = { 
          <Home 
            items = {items} 
            cartItems={cartItems}
            searchValue={searchValue} 
            onChangeSearchValue={onChangeSearchValue}
            setSearchValue={setSearchValue} 
            addToFavorite={addToFavorite}
            addToCard={addToCard}
            isLoading={isLoading}
          />}
        />
        <Route path='/favorites' element = { 
          <Favorites />}  
        />
      </Routes>

    </div>
    </AppContext.Provider>
  )  
}
export default App;
