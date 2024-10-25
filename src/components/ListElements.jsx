import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./shared/Card";
import Spinner from './shared/Spinner';

const ListElements = ({ language }) => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // Crear el controlador de abort
    const signal = controller.signal;

    const fetchItems = async () => {
      console.log("Fetching items...");
      setLoading(true);
      setError(null);

      try {
        let response;
        if (category === "bebidas") {
          response = await axios.get(`http://localhost:8000/api/drinks`, {
            headers: {
              "Accept-Language": language,
            },
            signal,
          });
        } else {
          response = await axios.get(
            `http://localhost:8000/api/plates${category ? `?category=${category}` : ""}`,
            {
              headers: {
                "Accept-Language": language,
              },
              signal,
            }
          );
        }

        const uniqueItems = Array.from(new Set(response.data.map(item => item.id)))
          .map(id => response.data.find(item => item.id === id));

        setItems(uniqueItems);
      } catch (err) {
        if (err.name !== "CanceledError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchItems();

    // Limpia la solicitud anterior cuando el efecto se ejecute de nuevo
    return () => controller.abort();
  }, [category, language]);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!items.length)
    return (
      <div className="">
        <div><Spinner /></div>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-16 p-8 md:grid-cols-2 lg:grid-cols-3 ">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          img={item.image || "default-image.png"}
          description={item.name}
          price={item.price}
          inventory={item.inventory}
          isDrink={category === "bebidas"}
        />
      ))}
    </div>
  );
};

export default ListElements;
