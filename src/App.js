function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper clear">
          <div className="drawer">
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
                    <h5 className="cartTitle">
                      Мужские Кроссовки Nike Air Max 270
                    </h5>
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
          <header className="header">
            <div className="header__left">
              <img
                width={40}
                height={40}
                src="/react-sneakers/img/logo.png"
                alt="Logo"
              />
              <div className="header__info">
                <h3>React Sneakers</h3>
                <p>Магазин кроссовок</p>
              </div>
            </div>
            <ul className="headerRight list listReset">
              <li className="listItem listItemCart">
                <img
                  width={18}
                  height={18}
                  src="/react-sneakers/img/cart.svg"
                  alt="Cart"
                />
                <span className="listItemSum">
                  1000 <span className="listItemVal">$</span>
                </span>
              </li>
              <li className="listItem">
                <img
                  width={18}
                  height={18}
                  src="/react-sneakers/img/like.svg"
                  alt="like"
                />
              </li>
              <li className="listItem">
                <img
                  width={18}
                  height={18}
                  src="/react-sneakers/img/profile.svg"
                  alt="Profile"
                />
              </li>
            </ul>
          </header>
          <div className="content">
            <div className="contentInfo">
              <h1 className="contentTitle">Все кроссовки</h1>
              <div className="contentSearch search">
                <img src="/react-sneakers/img/search.svg" alt="Search" />
                <input type="text" placeholder="Поиск..." />
              </div>
            </div>

            <div className="contentCards">
              <div className="contentCard card">
                <img
                  className="cardimgblike"
                  width={20}
                  height={20}
                  src="/react-sneakers/img/like.svg"
                  alt="Like"
                />
                <img
                  className="cardimg"
                  width={133}
                  height={112}
                  src="/react-sneakers/img/sneakers/1.jpg"
                  alt="Sneaker1"
                />
                <p className="cardDescr">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <div className="cardBottom">
                  <div className="cardPrice">
                    <span className="listItemPrice">Цена:</span>
                    <span className="listItemSum">
                      200 <span className="listItemVal">$</span>
                    </span>
                  </div>
                  <button className="cardBtn">
                    <img
                      width={15}
                      height={15}
                      src="/react-sneakers/img/plus.svg"
                      alt="Plus"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
