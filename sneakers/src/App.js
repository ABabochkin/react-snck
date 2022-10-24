
import axios from 'axios'
import Header from './components/Header'
import Card from './components/Card'
import Drawer from './components/Drawer'
import { useEffect, useState } from 'react'

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
  }, []);

  const addToCard = (obj) => {
    axios.post('https://63544c7ae64783fa8282d85a.mockapi.io/cart', obj)
    setCartItems( (prev) =>  [...prev, obj])
    console.log(obj)
  }

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  const onRemoveItem = (id) => {
    console.log(id)
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }


  
  return (
    <div className="wrapper">
      { cartOpened ? <Drawer items={cartItems} onClose = {() => setCartOpened(false) } onRemove = {onRemoveItem}  /> : null }
      <Header onClick = {() => setCartOpened(true)} />
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
              />
          ) )}  
        </div>
      </div>
    </div>
  );
}

export default App;
