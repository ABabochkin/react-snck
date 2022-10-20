

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
        <h1 style={{marginBottom: '40px'}} >Все кроссовки</h1>
        
        <div className='card' >
          <img width={133} header={112} src='./images/1.jpg'  alt='sneakers' />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='card-bottom'>
            <div className='card-info'>
              <span>ЦЕНА:</span>
              <b>12 999 руб.</b>
            </div>
            <button className='button' >
              <img width={11} height={11} src='./images/plus.svg' alt='plus' />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
