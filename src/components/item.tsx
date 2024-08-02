export type ItemType = {
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN: string;
  };
  title: string;
  currency_code: string;
  price: string;
  quantity: number;
  state: string;
};

type ItemProps = {
  item: ItemType;
};

const Item = ({ item }: ItemProps) => {
  const title =
    item.title.length > 50 ? item.title.slice(0, 51) + "..." : item.title;

  let priceCurrency: string;

  switch (item.currency_code) {
    case "USD":
      priceCurrency = `$${item.price}`;
      break;
    case "EUR":
      priceCurrency = `€${item.price}`;
      break;
    default:
      priceCurrency = `${item.price} ${item.currency_code}`;
      break;
  }

  const quantityClass: string =
    item.quantity <= 10
      ? "level-low"
      : item.quantity <= 20
      ? "level-medium"
      : "level-high";

  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title}</p>
        <p className="item-price">{priceCurrency}</p>
        <p className={`item-quantity ${quantityClass}`}>{item.quantity} left</p>
      </div>
    </div>
  );
};

export default Item;