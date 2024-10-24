import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";

const Header = ({ onLanguageChange }) => {
  const [categories, setCategories] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/categories/", {
          headers: {
            "Accept-Language": selectedLanguage,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [selectedLanguage]);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onLanguageChange(newLanguage); // Notify parent about language change
  };

  return (
    <header>
      <div className="flex justify-between items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">La Cuestesita</h1>
        <select
          className="bg-black text-white py-2 px-3 rounded-md"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Frances</option>
        </select>
      </div>

      <nav className="flex items-center justify-start md:justify-start md:gap-8 border-b mb-6 overflow-x-auto whitespace-nowrap">
        <NavLink to="/" className="py-2 flex-shrink-0">
          <RiHome2Fill />
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/${category.name.toLowerCase()}`}
            className="py-2 pr-4 flex-shrink-0"
          >
            {category.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;
