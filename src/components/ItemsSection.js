import React from "react";
import { items } from "../items.js";
import ItemCard from "./ItemCard.js";

const ItemsSection = () => {
  return (
    <div className="w-10/12 mt-16 mx-auto">
      <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 xl:grid-cols-5 w-full p-2  place-content-center">
        {items.map((items, index) => {
          return (
            <ItemCard
              key={items.id}
              title={items.title}
              description={items.description}
              url={items.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ItemsSection;
