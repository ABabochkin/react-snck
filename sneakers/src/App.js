
import Card from './components/Card'

function App() {
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
            <input placeholder='Поиск...' />
          </div>
        </div>
        
        <div style={{display: 'flex'}} >
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      

      </div>
    </div>
  );
}

export default App;
