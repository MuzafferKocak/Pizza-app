import React from "react";
import { pizzaData } from "../helpers/data";
import Pizza from "./Pizza";

const Menu = () => {
//   console.log(pizzaData);
  return (
    <section id="menu" className="pt-32 sm:pt-24 px-2 sm:px-4">
    
      <h1 className="text-center text-4xl sm:text-5xl font-bold underline mb-4 sm:mb-8 text-white">Unser Menü</h1>
    

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
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
    </section>
  );
};

export default Menu;
