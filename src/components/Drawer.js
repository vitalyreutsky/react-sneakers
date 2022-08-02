function Drawer() {
  return (
    <div style={{ display: "none" }} className="drawer">
      <div className="drawerBlock">
        <h2 className="drawerTitle">Корзина</h2>
        <div className="drawerClose">
          <img
            width={15}
            height={15}
            src="/react-sneakers/img/close.svg"
            alt="Close"
          />
        </div>

        <div className="drawerCarts cartItems">
          <div className="drawerItem cart">
            <div className="cartImg">
              <img
                width={70}
                height={70}
                src="/react-sneakers/img/sneakers/1.jpg"
                alt="Sneaker1"
              />
            </div>
            <div className="cartInfo">
              <h5 className="cartTitle">Мужские Кроссовки Nike Air Max 270</h5>
              <span className="cartPrice cartPrice-sum">
                200 <span className="cartPriceVal">$</span>
              </span>
            </div>
            <div className="cartCloseIcon">
              <img
                width={15}
                height={15}
                src="/react-sneakers/img/close.svg"
                alt="Close"
              />
            </div>
          </div>
        </div>

        <div className="drawerBottom cartBottom">
          <ul className="cartList listReset">
            <li className="cartListItem">
              <h5 className="cartListTitle">Итого:</h5>
              <div></div>
              <span className="cartListSum">
                200 <span className="cartListVal">$</span>
              </span>
            </li>

            <li className="cartListItem">
              <h5 className="cartListTitle">Налог:</h5>
              <div></div>
              <span className="cartListSum">
                5 <span className="cartListVal">%</span>
              </span>
            </li>
          </ul>
          <button className="btn cartBtn">
            Оформить заказ
            <img src="/react-sneakers/img/arr.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
