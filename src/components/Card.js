function Card() {
  return (
    <div className="contentCard card">
      <img
        className="cardImgBlike"
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
      <p className="cardDescr">Мужские Кроссовки Nike Blazer Mid Suede</p>
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
  );
}

export default Card;
