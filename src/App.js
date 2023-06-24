import { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from 'axios';


function App() {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // fetch('https://648edd6975a96b664444627e.mockapi.io/items').then((res) => {
    //   return res.json();
    // }).then(json => {
    //   setItems(json);
    // });
    axios.get('https://648edd6975a96b664444627e.mockapi.io/items').then((res) => {
      setItems(res.data)
    });
    axios.get('https://648edd6975a96b664444627e.mockapi.io/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);


  const onAddToCart = (obj) => {
    axios.post('https://648edd6975a96b664444627e.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://648edd6975a96b664444627e.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://64922fa2428c3d2035cff609.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path='/test'> Test Information </Route>
      </Routes>

      <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
          <h1>{searchValue ? `Пошук по запиту: "${searchValue}"` : "Всі кросівки"} </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            {searchValue && <img className="removeBtn cu-p clear" onClick={() => setSearchValue('')} src="/img/btn-remove.svg" alt="clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;
