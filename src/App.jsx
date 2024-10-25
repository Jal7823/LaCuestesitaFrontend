import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/shared/Card";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/shared/Sidebar";
import Header from "./components/shared/Header";
import ListElements from "./components/ListElements";
import Details from "./components/Details";
import Spinner from './components/shared/Spinner';
import { RiMenu3Fill, RiUser3Line, RiAddLine, RiPieChartLine, RiCloseLine } from "react-icons/ri";
import Login from "./components/auth/Login";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState("en");

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  const fetchItems = async (category = "") => {
    try {
      const response = await axios.get(`http://localhost:8000/api/plates${category ? `?category=${category}` : ""}`, {
        headers: {
          "Accept-Language": language, // Aquí se establece el Accept-Language
        },
      });
      setItems(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [language]); // Refetch items when language changes

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  if (loading) return <div><Spinner /></div>;
  if (error) return <div className="mx-auto my-auto">Error: {error.message}</div>;
  if (!items.length) return <div className="flex justify-center items-center"><p>No items available in this category.</p></div>;

  return (
    <Router>
      <div className="bg-custom-white dark:bg-custom-primary-black dark:text-white w-full min-h-screen">
        <Sidebar showMenu={showMenu} />
        <nav className="bg-custom-white dark:bg-custom-secondary-black lg:hidden fixed w-full bottom-0 left-0 text-3xl py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
          <button className="p-2 text-custom-purpure-dark-light"><RiUser3Line /></button>
          <button className="p-2 text-custom-purpure-dark-light"><RiAddLine /></button>
          <button onClick={toggleOrders} className="p-2 text-custom-purpure-dark-light"><RiPieChartLine /></button>
          <button onClick={toggleMenu} className="p-2 text-custom-purpure-dark-light">{showMenu ? <RiCloseLine /> : <RiMenu3Fill />}</button>
        </nav>

        <main className="pb-20 lg:pl-32">
          <div className="p-4 md:p-8">
            <Header onLanguageChange={handleLanguageChange} />
            <Routes>
              <Route path="/" element={<ListElements items={items} fetchItems={fetchItems} language={language} />} />
              <Route path="/:category" element={<ListElements fetchItems={fetchItems} language={language} />} />
              <Route path="/details/:id" element={<Details language={language} />} /> {/* Pasa el idioma aquí */}
              {/* Auth */}
              <Route path="/login" element={<Login />} />

            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
