import { useEffect, useMemo, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('https://648edd6975a96b664444627e.mockapi.io/items').then((res) => {
      return res.json();
    }).then(json => {
      setItems(json);
    });
  }, []);

  // const [chooses, setChooses] = useState([]);

  // useEffect(() => {
  //   setChooses(chooses.filter((item) => item.title.includes(search)))
  // }, [search])

  // const chooses = useMemo(() => {
  //    return items.filter((item) => item.title.includes(search))
  // }, [search]);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  return (
    <div className="wrapper clear">

      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
          <h1>Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map(item => (
            <Card
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
