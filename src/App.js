import { Card } from "./Card";
import { Cart } from "./Cart";

const cardList = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede 1',
    price: 3899,
    imagePath: '/img/sneakers/1.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede 2',
    price: 2755,
    imagePath: '/img/sneakers/2.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede 3',
    price: 5742,
    imagePath: '/img/sneakers/3.jpg'
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede 4',
    price: 356,
    imagePath: '/img/sneakers/4.jpg'
  },
]

function App() {
  return (
    <div className="wrapper clear">
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
      <img width = {40} height={40} src='/img/logo.png' />
      <div>
        <h3 className="text-uppercase">React Sneakers</h3>
        <p className="opacity-5">Магазин лучших кроссовок</p>
      </div>
      </div>

      <Cart age={30}>
        <h2>Igor</h2>
        <h3>Shilov</h3>
      </Cart>

    </header>

    <div className="content p-40">
      <h1 className="mb-40">Все кроссовки</h1>

      <div className="d-flex">
        {cardList.map(({price, title, imagePath}, index)=> (
            <Card key={index} title={title} price={price} imagePath={imagePath}/>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;
