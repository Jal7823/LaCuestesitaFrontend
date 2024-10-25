import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RiEdit2Fill, RiDeleteBin6Line } from "react-icons/ri";

const Details = ({ language }) => { // Acepta el idioma como prop
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/plates/${id}`, {
          headers: {
            "Accept-Language": language, // Agrega el encabezado para el idioma
          },
        });
        setItem(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, language]); // Incluye el idioma como dependencia

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!item) return <div>No item found</div>;

  return (
    <div className="container ">
      <div className="bg-custom-purpure-light p-8 rounded-xl flex flex-col items-center gap-2 text-center  dark:bg-custom-secondary-black">
        <div className="flex justify-between w-full">
          <h1 className='text-3xl'>{item.name.toUpperCase()}</h1>
          <h1 className='text-3xl text-white bg-custom-purpure-dark-light p-2 rounded-full'>{item.id}</h1>
        </div>
        <img
          src={item.image || "default-image.png"}
          alt={item.description}
          className="w-80 h-80 object-contain mt-20 shadow-2xl rounded-full"
        />
        <p className="text-xl">{item.description}</p>
        <span className="text-gray-400 text-3xl">€{item.price}</span>
        {item.ingredients && item.ingredients.length > 0 && (
          <div className="mt-4 ">
            <h3 className="text-lg font-semibold">Ingredientes:</h3>
            <ul className="list-disc  ">
              {item.ingredients.map(ingredient => (
                <li key={ingredient.id} className=" text-left">
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-between w-full mt-4">
          <button className="bg-custom-purpure-dark-light text-white hover:bg-[#BD85FC] rounded-full p-2">
            <RiEdit2Fill />
          </button>
          <button className="bg-custom-purpure-dark-light text-white hover:bg-[#BD85FC] rounded-full p-2">
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
