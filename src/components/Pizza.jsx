import React from "react";

const Pizza = ({ name, price, ingredients, photoName, soldOut }) => {
  return (
    <div className="p-4 border rounded shadow bg-[#203a43] ">
      <img
        src={`/${photoName}`}
        alt={name}
        className="w-full h-48 object-fill rounded transition-transform duration-400 ease-in-out transform hover:scale-110 hover:border-2 hover:border-red-500"
      />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-400">{ingredients}</p>
      <span className="block mt-1 font-semibold">{price} €</span>
      {soldOut && <span className="text-red-500 font-bold">Sold Out</span>}
    </div>
  );
};

export default Pizza;
