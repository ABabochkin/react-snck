
import Header from './components/Header'
import Card from './components/Card'
import Drawer from './components/Drawer'
import { useState } from 'react'

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


  const [items, setItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)

  fetch('https://63544c7ae64783fa8282d85a.mockapi.io/items')
    .then(res => {
      return res.json()
    })
    .then((json) => {
      setItems(json)
    } )

  return (
    <div className="wrapper" >
      { cartOpened ? <Drawer onClick = {() => setCartOpened(false) } /> : null }
      <Header onClick = {() => setCartOpened(true)} />
      <div className="content" >
        <div className='search' >
          <h1>Все Кроссовки</h1>
          <div className='search-block' >
            <img src='./images/search.svg' alt='search' />
            <input placeholder='Поиск...' />
          </div>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
          {items.map((obj) => (
            <Card
              title = {obj.name}
              price = {obj.price}
              Image = {obj.Image}
            />
          ) )}  
        </div>
      </div>
    </div>
  );
}

export default App;
