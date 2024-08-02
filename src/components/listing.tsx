import Item, { ItemType } from "./item";

type arrayPropsType = {
  array: ItemType[];
};

const Listing = ({ array = [] }: arrayPropsType) => {
  const items: JSX.Element[] = [];
  array.forEach((item) => {
    if (!item.url) return;

    const el = <Item key={item.listing_id} item={item} />;
    items.push(el);
  });
  return <div className="item-list">{items}</div>;
};

export default Listing;