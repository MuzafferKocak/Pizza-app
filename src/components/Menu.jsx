import React from "react";
import { pizzaData } from "../helpers/data";
import Pizza from "./Pizza";

const Menu = () => {
//   console.log(pizzaData);
  return (
    <div id="menu" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-24">
      {pizzaData.map((pizza) => (
        <Pizza
          key={pizza.id}
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          photoName={pizza.photoName}
          soldOut={pizza.soldOut}
        />
      ))}
    </div>
  );
};

export default Menu;
