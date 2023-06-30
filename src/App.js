import { useEffect, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from 'axios';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites"


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
    axios.get('https://64922fa2428c3d2035cff609.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
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

  const onAddToFavorite = async (obj) => {
    if(favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://64922fa2428c3d2035cff609.mockapi.io/favorites/${obj.id}`);
    } else {
        const {data} = await axios.post('https://64922fa2428c3d2035cff609.mockapi.io/favorites', obj);
        setFavorites((prev) => [...prev, data]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <Routes>
        <Route path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route path="/favorites" exact 
          element={<Favorites 
          items={favorites}
          onAddToFavorite={onAddToFavorite}
        />}/>
      </Routes>

    </div>
  );
}

export default App;
