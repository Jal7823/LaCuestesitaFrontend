// src/components/shared/Card.jsx
import React from "react";
import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";

const Card = (props) => {
  const { img, description, price, inventory } = props;

  return (
    <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
      <img
        src={img}
        className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
      />
      <p className="text-xl">{description}</p>
      <span className="text-gray-400">${price}</span>
      {/* <p className="text-gray-600">{inventory} Bowls available</p> */}
      <div className="flex justify-between w-full">
        <button className="bg-[#1F1D2B] hover:bg-[#BD85FC] rounded-full p-2">
          <RiEdit2Fill className=""></RiEdit2Fill>
        </button>
        <button className="bg-[#1F1D2B] hover:bg-[#BD85FC] rounded-full p-2">
          <RiDeleteBin6Line className=""></RiDeleteBin6Line>
        </button>
      </div>
    </div>
  );
};

export default Card;
