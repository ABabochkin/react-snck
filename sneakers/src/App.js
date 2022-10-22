
import Header from './components/Header'
import Card from './components/Card'
import Drawer from './components/Drawer'
import { useState } from 'react'

function App() {

  const arr = [
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб.', Image: './images/1.jpg'},
    {name: 'Мужские Кроссовки Nike Air Max 270', price: '12 999 руб.', Image: './images/2.jpg'},
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499 руб.', Image: './images/3.jpg'},
    {name: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999 руб.', Image: './images/4.jpg'}
]

  const [cartOpened, setCartOpened] = useState(false)



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
        <div style={{display: 'flex'}}>
          {arr.map((obj) => (
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
