function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper">
          <header className="header">
            <div className="header__left">
              <img width={40} height={40} src="/img/logo.png" alt="Logo" />
              <div className="header__info">
                <h3>React Sneakers</h3>
                <p>Магазин кроссовок</p>
              </div>
            </div>
            <ul className="header__right list list-reset">
              <li className="list__item list__item-cart">
                <img width={18} height={18} src="/img/cart.svg" alt="Cart" />
                <span className="list__item-sum">
                  1000 <span className="list__item-val">$</span>
                </span>
              </li>
              <li className="list__item">
                <img width={18} height={18} src="/img/like.svg" alt="like" />
              </li>
              <li className="list__item">
                <img
                  width={18}
                  height={18}
                  src="/img/profile.svg"
                  alt="Profile"
                />
              </li>
            </ul>
          </header>
          <div className="content">
            <h1 className="content__title">Все кроссовки</h1>
            <div className="content__cards">
              <div className="content__card card">
                <img
                  width={133}
                  height={112}
                  src="/img/sneakers/1.jpg"
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
                      src="/img/plus.svg"
                      alt="Plus"
                    />
                  </button>
                </div>
              </div>

              <div className="content__card card">
                <img
                  width={133}
                  height={112}
                  src="/img/sneakers/2.jpg"
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
                      src="/img/plus.svg"
                      alt="Plus"
                    />
                  </button>
                </div>
              </div>

              <div className="content__card card">
                <img
                  width={133}
                  height={112}
                  src="/img/sneakers/3.jpg"
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
                      src="/img/plus.svg"
                      alt="Plus"
                    />
                  </button>
                </div>
              </div>

              <div className="content__card card">
                <img
                  width={133}
                  height={112}
                  src="/img/sneakers/4.jpg"
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
                      src="/img/plus.svg"
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
