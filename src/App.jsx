import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./components/shared/Sidebar";
import Header from "./components/shared/Header";
import PlatesList from "./components/PlatesList"; // Importa el componente

import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

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
          <button onClick={toggleMenu} className="text-white p-2">
            {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
          </button>
        </nav>
        <main className="lg:pl-32 pb-20">
          <div className="md:p-8 p-4">
            <Header />
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-xl text-gray-300">Platos</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
                <RiArrowDownSLine /> Dine in
              </button>
            </div>
            <Routes>
              <Route path="/:category" element={<PlatesList />} />
              {/* Default route or other routes */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
