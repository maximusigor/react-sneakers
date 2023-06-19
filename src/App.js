import { useEffect, useMemo, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://648edd6975a96b664444627e.mockapi.io/items').then((res) => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);


  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  const onSearchChangeInput = (event) => {
    
    setSearchValue(event.target.value);
  }

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Пошук по запиту: "${searchValue}"` : "Всі кросівки"} </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onSearchChangeInput} value={searchValue} placeholder="Пошук..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Add to bookmarks")}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;
