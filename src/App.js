import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  {
    title: 'Чоловічі кросівки Nike Blazer Mid Suede',
    price: 3999,
    imageUrl: './img/sneakers/1.jpg',
  },
  {
    title: 'Чоловічі кросівки Nike Air Max 270',
    price: 2499,
    imageUrl: './img/sneakers/2.jpg'
  },
  {
    title: 'Чоловічі кросівки Nike Blazer Mid Suede',
    price: 2589,
    imageUrl: './img/sneakers/3.jpg',
  },
  {
    title: 'Чоловічі кросівки Puma X Aka Boku Future Rider',
    price: 4129,
    imageUrl: './img/sneakers/4.jpg'
  },
];

function App() {
  return (
    
    <div className="wrapper clear">

      <Drawer />
      <Header />

      <div className="content p-40">

        <div className="d-flex align-center mb-40 justify-between">
          <h1>Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Пошук..." />
          </div>
        </div>

        <div className="d-flex">
          {arr.map(obj => (
            <Card 
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onClickFavorite={() => console.log('Add to bookmarks')}
              onPlus={() => console.log('Add to cart')}
            /> 
          ))}
        </div>

      </div>

    </div>
  );
}

export default App;
