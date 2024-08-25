import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./shared/Card";

const PlatesList = () => {
  const { category } = useParams(); // Obtiene la categoría desde los parámetros de la URL
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let response;
        // Verifica si la categoría es 'bebidas' o cualquier otra
        if (category === 'bebidas') {
          response = await axios.get(`http://localhost:8000/api/drinks`);
        } else {
          response = await axios.get(`http://localhost:8000/api/plates?category=${category}`);
        }
        setItems(response.data); // Asume que los datos de platos o bebidas están en la respuesta
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [category]);

  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!items.length) return <div className="text-white">No hay elementos disponibles en esta categoría.</div>;

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {items.map(item => (
        <Card
          key={item.id}
          img={item.image || "default-image.png"}
          description={item.name}
          price={item.price}
          inventory={item.inventory} // Asume que el inventario está en la respuesta
        />
      ))}
    </div>
  );
};

export default PlatesList;
