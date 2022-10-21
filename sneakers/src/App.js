
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

      <div className='overlay'>
        <div className='drawer' >
          <div className='cartClose'>
            <h2>Корзина</h2>
            <button className='btnClose' > <img src='./images/remove.png' alt='close' /> </button>
          </div>
            <div className='items'>
              <div className='cardItem'>
                <img style={{marginRight: '20px'}} width={70} height={70} src='./images/2.jpg' alt='snk'/>
                <div style={{marginRight: '20px'}} >
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <button className='removeBtn' >
                  <img width={11} height={11} src='./images/remove.png'  alt='removeBtn' />
                </button>
              </div>
              <div className='cardItem'>
                <img style={{marginRight: '20px'}} width={70} height={70} src='./images/2.jpg' alt='snk'/>
                <div style={{marginRight: '20px'}} >
                  <p>Мужские Кроссовки Nike Air Max 270</p>
                  <b>12 999 руб.</b>
                </div>
                <button className='removeBtn' >
                  <img width={11} height={11} src='./images/remove.png'  alt='removeBtn' />
                </button>
              </div>
        </div>
        <div className='cardTotalBlock'>
          <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
                <li>
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
                <button className='buttonCheck'>Оформить заказ</button>
                <img src='./images/btn.png'  alt='btn'/>
            </ul>
          </div>
        </div>
      </div>


      <header>
        <div className="header-left">
          <img width={40} height={40} src="./images/logo.png" alt="logo"/>
          <div>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul>
          <li style={{marginRight: '30px'}}>
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
