
function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">

      <div className="drawer">

        <h2 className="mb-30 d-flex justify-between">
          Кошик <img className="removeBtn cu-p" onClick={onClose} src="/img/btn-remove.svg" alt="close" />
        </h2>

        {
          items.length > 0 ? <div>
            <div className="items">
              {items.map((obj) => (
                <div className="cartItem d-flex align-center mb-20">
                  <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className="cartItemImg"> </div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} грн.</b>
                  </div>
                  <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Разом:</span>
                  <div></div>
                  <b>5458 грн.</b>
                </li>
                <li>
                  <span>Податок 5%:</span>
                  <div></div>
                  <b>272.90 грн.</b>
                </li>
              </ul>
              <button className="greenButton">Оформити замовлення <img src="/img/arrow.svg" alt="arrow" /></button>
            </div>
          </div> : <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" style={{ width: 120, height: 120 }} src="/img/empty-cart.jpg" alt="empty-cart" />
            <h2>Кошик порожній</h2>
            <p className="opacity-6" >Додайте хоча б одну пару кросівок, для того щоб зробити замовлення.</p>
            <button className="greenButton" onClick={onClose}>
              <img src="/img/arrow.svg" alt="arrow" />
              Повернутися назад
            </button>
          </div>
        }

      </div>
    </div>
  );
}

export default Drawer;