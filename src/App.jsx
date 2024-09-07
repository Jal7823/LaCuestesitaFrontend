import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/shared/Card";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Sidebar from "./components/shared/Sidebar";
import Header from "./components/shared/Header";
import ListElements from "./components/ListElements";
import Details from "./components/Details";

import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  // Function to fetch items, with optional category filter
  const fetchItems = async (category = "") => {
    try {
      let response;

      // Conditionally fetch items based on category
      if (category) {
        response = await axios.get(`http://localhost:8000/api/plates?category=${category}`);
      } else {
        response = await axios.get(`http://localhost:8000/api/plates`);
      }

      setItems(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Load items when component mounts, or category changes
  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!items.length)
    return (
      <div className="text-white">No items available in this category.</div>
    );

  return (
    <Router>
      <div className="bg-[#262837] w-full min-h-screen">
        <Sidebar showMenu={showMenu} />
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          <button className="p-2">
            <RiUser3Line />
          </button>
          <button className="p-2">
            <RiAddLine />
          </button>
          <button onClick={toggleOrders} className="p-2">
            <RiPieChartLine />
          </button>
          <button onClick={toggleMenu} className="p-2 text-white">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </nav>
        <main className="pb-20 lg:pl-32">
          <div className="p-4 md:p-8">
            <Header />
            <Routes>
              <Route
                path="/"
                element={<ListElements items={items} fetchItems={fetchItems} />}
              />
              <Route path="/:category" element={<ListElements fetchItems={fetchItems} />} />
              <Route path="/details/:id" element={<Details />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
