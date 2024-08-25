import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./shared/Card";

const PlatesList = () => {
  const { category } = useParams(); // Obtiene la categoría desde los parámetros de la URL
  const [plates, setPlates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);




  useEffect(() => {
    const fetchPlates = async () => {
      try {
        if (category) {
          // Incluye la categoría como parámetro de consulta
          response = await axios.get(`http://localhost:8000/api/drinks`);
          console.log(response.data); // Para depuración
          setPlates(response.data);
        } else {
          setPlates([]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlates();
  }, [category]);

  console.log(plates);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!plates.length) return <div className="text-white">No hay platos disponibles en esta categoría.</div>;

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {plates.map(plate => (
        <Card
          key={plate.id}
          img={plate.image || "default-image.png"}
          description={plate.name}
          price={plate.price}
          inventory={plate.inventory} // Asume que el inventario está en la respuesta
        />
      ))}
    </div>
  );
};

export default PlatesList;
