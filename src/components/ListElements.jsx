import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./shared/Card";

const PlatesList = () => {
  const { category } = useParams(); 
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        let response;

        // Ajusta la URL de la API según la categoría
        if (category === 'bebidas') {
          response = await axios.get(`http://localhost:8000/api/drinks`);
        } else {
          response = await axios.get(`http://localhost:8000/api/plates${category ? `?category=${category}` : ''}`);
        }
        setItems(response.data); 
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
  if (!items.length) return <div className="text-white">No items available in this category.</div>;

  return (
    <div className="grid grid-cols-1 gap-16 p-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map(item => (
        <Card
          key={item.id}
          id={item.id}
          img={item.image || "default-image.png"}
          description={item.name}
          price={item.price}
          inventory={item.inventory}
          isDrink={category === 'bebidas'} // Pasar la prop isDrink si es necesario
        />
      ))}
    </div>
  );
};

export default PlatesList;
