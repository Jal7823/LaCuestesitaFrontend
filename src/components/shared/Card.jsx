import { NavLink } from "react-router-dom";
import React from "react";
import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";

const Card = ({ id, img, description, price, inventory, isDrink }) => {
  const cardContent = (
    <div className="bg-custom-purpure-light p-8 rounded-xl flex flex-col items-center gap-2 text-center border border-1 shadow-2xl dark:bg-custom-secondary-black">
      <img
        src={img}
        alt={description} // Añadir un texto alternativo para accesibilidad
        className="object-cover w-40 h-40 -mt-20 rounded-full shadow-2xl"
      />
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">€{price}</span>
      <div className="flex justify-between w-full">
        <button className="bg-custom-purpure-dark-light text-white dark:text-custom-primary-black hover:text-white rounded-full p-2">
          <RiEdit2Fill />
        </button>
        <button className="bg-custom-purpure-dark-light text-white dark:text-custom-primary-black hover:text-white rounded-full p-2">
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );

  return isDrink ? cardContent : <NavLink to={`/details/${id}`}>{cardContent}</NavLink>;
};

export default Card;
