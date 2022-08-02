function Header() {
  return (
    <header className="header">
      <div className="headerLeft">
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
  );
}

export default Header;
