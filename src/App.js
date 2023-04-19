

function App() {
  return (
    <div className="wrapper clear">
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width = {40} height={40} src='/img/logo.png' />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин найкращих кросівок</p>
        </div>
      </div>
      <ul className="d-flex">
          <li className="mr-30">
              <img width = {18} height={18} src='/img/cart.svg' alt="cart" />
              <span>735грн.</span>
          </li>
          <li>
              <img width = {18} height={18} src='/img/user.svg' alt="user" />
          </li>
      </ul>
    </header>

    <div className="content p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1>Всі кросівки</h1>
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="search" />
          <input placeholder="Пошук..." />
        </div>
      </div>

      <div className="d-flex">
        <div className="card">
            <img src="/img/sneakers/1.jpg" style={{ width: 133, height: 112 }} alt="Sneakers" />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>2999 грн.</b>
                </div>
                
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
        <div className="card">
            <img src="/img/sneakers/2.jpg" style={{ width: 133, height: 112 }} alt="Sneakers" />
            <h5>Чоловічі кросівки Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>2459 грн.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
        <div className="card">
            <img src="/img/sneakers/3.jpg" style={{ width: 133, height: 112 }} alt="Sneakers" />
            <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>2779 грн.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
        <div className="card">
            <img src="/img/sneakers/4.jpg" style={{ width: 133, height: 112 }} alt="Sneakers" />
            <h5>Чоловічі кросівки Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Ціна:</span>
                    <b>2899 грн.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
