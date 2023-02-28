import { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";
import places from "./data";
import { IPlace } from "./types";

const App = () => {
  const [wishlist, setWishlist] = useState<IPlace[]>([]);
  useEffect(() => {
    const storedWishlistItems = localStorage.getItem("favorites");
    console.log('wishlist in parent',storedWishlistItems)
    if (storedWishlistItems) {
      const parsedWishlist = JSON.parse(storedWishlistItems);
      setWishlist(parsedWishlist);
    }
  }, []);

  return (
    <div className="cards">
      {places.map((place) => {
        return (
          <Card
            key={place.id}
            place={place}
            wishlist={wishlist}
            setWishlist={setWishlist}
          />
        );
      })}
    </div>
  );
};

export default App;
