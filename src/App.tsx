import { ItemType } from "./components/item";
import Listing from "./components/listing";
import data from "./data/etsy.json";

function App() {
  return (
    <>
      <Listing array={data as ItemType[]} />
    </>
  );
}

export default App;