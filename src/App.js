function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper clear">
          <div className="drawer">
            <div className="drawer__block">
              <h2 className="drawer__title">Корзина</h2>
              <div className="drawer__close">
                <img
                  width={15}
                  height={15}
                  src="/react-sneakers/img/close.svg"
                  alt="Close"
                />
              </div>

              <div className="drawer__carts cart__items">
                <div className="drawer__item cart">
                  <div className="cart__img">
                    <img
                      width={70}
                      height={70}
                      src="/react-sneakers/img/sneakers/1.jpg"
                      alt="Sneaker1"
                    />
                  </div>
                  <div className="cart__info">
                    <h5 className="cart__title">
                      Мужские Кроссовки Nike Air Max 270
                    </h5>
                    <span className="cart__price cart__price-sum">
                      200 <span className="cart__price-val">$</span>
                    </span>
                  </div>
                  <div className="cart__close-icon">
                    <img
                      width={15}
                      height={15}
                      src="/react-sneakers/img/close.svg"
                      alt="Close"
                    />
                  </div>
                </div>
                <div className="drawer__item cart">
                  <div className="cart__img">
                    <img
                      width={70}
                      height={70}
                      src="/react-sneakers/img/sneakers/1.jpg"
                      alt="Sneaker1"
                    />
                  </div>
                  <div className="cart__info">
                    <h5 className="cart__title">
                      Мужские Кроссовки Nike Air Max 270
                    </h5>
                    <span className="cart__price cart__price-sum">
                      200 <span className="cart__price-val">$</span>
                    </span>
                  </div>
                  <div className="cart__close-icon">
                    <img
                      width={15}
                      height={15}
                      src="/react-sneakers/img/close.svg"
                      alt="Close"
                    />
                  </div>
                </div>
              </div>

              <div className="drawer__bottom cart__bottom">
                <ul className="cart__list list-reset">
                  <li className="cart__list-item">
                    <h5 className="cart__list-title">Итого:</h5>
                    <div></div>
                    <span className="cart__list-sum">
                      200 <span className="cart__list-val">$</span>
                    </span>
                  </li>

                  <li className="cart__list-item">
                    <h5 className="cart__list-title">Налог:</h5>
                    <div></div>
                    <span className="cart__list-sum">
                      5 <span className="cart__list-val">%</span>
                    </span>
                  </li>
                </ul>
                <button className="btn cart__btn">
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
            <ul className="header__right list list-reset">
              <li className="list__item list__item-cart">
                <img
                  width={18}
                  height={18}
                  src="/react-sneakers/img/cart.svg"
                  alt="Cart"
                />
                <span className="list__item-sum">
                  1000 <span className="list__item-val">$</span>
                </span>
              </li>
              <li className="list__item">
                <img
                  width={18}
                  height={18}
                  src="/react-sneakers/img/like.svg"
                  alt="like"
                />
              </li>
              <li className="list__item">
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
            <div className="content__info">
              <h1 className="content__title">Все кроссовки</h1>
              <div className="content__search search">
                <img src="/react-sneakers/img/search.svg" alt="Search" />
                <input type="text" placeholder="Поиск..." />
              </div>
            </div>

            <div className="content__cards">
              <div className="content__card card">
                <img
                  className="card__img-b-like"
                  width={20}
                  height={20}
                  src="/react-sneakers/img/like.svg"
                  alt="Like"
                />
                <img
                  className="card__img"
                  width={133}
                  height={112}
                  src="/react-sneakers/img/sneakers/1.jpg"
                  alt="Sneaker1"
                />
                <p className="card__descr">
                  Мужские Кроссовки Nike Blazer Mid Suede
                </p>
                <div className="card__bottom">
                  <div className="card__price">
                    <span className="list__item-price">Цена:</span>
                    <span className="list__item-sum">
                      200 <span className="list__item-val">$</span>
                    </span>
                  </div>
                  <button className="card__btn">
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
