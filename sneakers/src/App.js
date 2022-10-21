
import Card from './components/Card'

function App() {

  const arr = [
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '12 999 руб.', Image: './images/1.jpg'},
    {name: 'Мужские Кроссовки Nike Air Max 270', price: '12 999 руб.', Image: './images/2.jpg'},
    {name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '8 499 руб.', Image: './images/3.jpg'},
    {name: 'Кроссовки Puma X Aka Boku Future Rider', price: '8 999 руб.', Image: './images/4.jpg'}

  ]


  return (
    <div className="wrapper">
      <header>
        <div className="header-left">
          <img width={40} height={40} src="./images/logo.png" alt="logo"/>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header-right" >
          <li style={{marginRight: '30px'}} >
            <img width={18} height={18} src="./images/cart.png" alt="card"/>
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="./images/like.png" alt="like"/>
          </li>
        </ul>
      </header>
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
