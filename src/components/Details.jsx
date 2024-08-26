import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";

const Details = () => {
  const { id } = useParams(); // Obtiene el ID desde los parámetros de la URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/plates/${id}`);
        setItem(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]); // Dependencia en id para volver a ejecutar si cambia

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!item) return <div>No item found</div>;

  return (
    <div className="container">
      <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
        <img
          src={item.image || "default-image.png"}
          alt={item.description}
          className="w-120 h-120 object-cover -mt-20 shadow-2xl rounded-full"
        />
        <p className="text-xl">{item.description}</p>
        <span className="text-gray-400">${item.price}</span>
        {/* Mostrar ingredientes */}
        {item.ingredients && item.ingredients.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Ingredients:</h3>
            <ul className="list-disc list-inside">
              {item.ingredients.map(ingredient => (
                <li key={ingredient.id} className="text-gray-300 text-left">
                  {ingredient.name} 
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-between w-full mt-4">
          <button className="bg-[#1F1D2B] hover:bg-[#BD85FC] rounded-full p-2">
            <RiEdit2Fill />
          </button>
          <button className="bg-[#1F1D2B] hover:bg-[#BD85FC] rounded-full p-2">
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
