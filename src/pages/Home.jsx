import Card from "../components/Card";

function Home({searchValue, onChangeSearchInput, setSearchValue, items = [], onAddToFavorite, onAddToCart}) {
    return (
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
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
        </div>

      </div>
    );
}

export default Home;