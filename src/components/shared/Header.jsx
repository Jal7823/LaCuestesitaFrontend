import React from "react";
import { NavLink } from 'react-router-dom';
import { RiSearch2Line } from "react-icons/ri";
import { RiHome2Fill } from "react-icons/ri";


const Header = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${day}-${month}-${year}`;
  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold ">La Cuestesita</h1>
          <p className="text-gray-500">{formattedDate}</p>
        </div>
        <form>
          <div className="w-full relative flex">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 " />
            <input
              type="text"
              className="bg-custom-white w-full py-2 pl-10 pr-4 rounded-lg  outline-none border border-b-2 dark:bg-custom-secondary-black"
              placeholder="Buscar"
            />

          </div>
        </form>
      </div>
      {/* Tabs */}
      {/* TODO AGREGAR EL FIXED AL NAVBAR Y TEN CUIDADO CON EL TOP */}
      <nav className="  flex items-center justify-start md:justify-start md:gap-8 border-b mb-6 overflow-x-auto whitespace-nowrap">
        <NavLink to="/" className="py-2  flex-shrink-0"><RiHome2Fill /></NavLink>
        <NavLink to="/pescados" className="py-2 pr-4 flex-shrink-0">Pescados</NavLink>
        <NavLink to="/carnes" className="py-2 pr-4 flex-shrink-0">Carnes</NavLink>
        <NavLink to="/ensaladas" className="py-2 pr-4 flex-shrink-0">Ensaladas</NavLink>
        <NavLink to="/postres" className="py-2 pr-4 flex-shrink-0">Postres</NavLink>
        <NavLink to="/bebidas" className="py-2 pr-4 flex-shrink-0">Bebidas</NavLink>
        <NavLink to="/toque-frances" className="py-2 pr-4 flex-shrink-0">Toque Frances</NavLink>
        <NavLink to="/paella" className="py-2 pr-4 flex-shrink-0">Paella</NavLink>
        <NavLink to="/entrantes" className="py-2 pr-4 flex-shrink-0">Entrantes</NavLink>
        <NavLink to="/pastas" className="py-2 pr-4 flex-shrink-0">Pastas</NavLink>
      </nav>
    </header>
  );
};

export default Header;
