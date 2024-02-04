import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
// Components
import Sidebar from "./Components/shared/Sidebar"
import Car from "./Components/shared/Car";

import Header from "./Components/shared/Header"
import Card from "./Components/shared/Card"

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
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
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
      <main className="lg:pl-32 lg:pr-96 pb-20">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">CHEF SORY</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Reserva
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* Card */}
            <Card
              img="delicates-removebg-preview.png"
              description="Sason D'Mama"
              price="€3.29"
              inventory=""
            />
            {/* Card */}
            <Card
              img="hamburguesa-removebg-preview.png"
              description="Sason D'Mama"
              price="€23.29"
              inventory=""
            />
            {/* Card */}
            <Card
              img="parmesano-removebg-preview.png"
              description="Sason D'Mama"
              price="€24.29"
              inventory=""
            />
            {/* Card */}
            <Card
              img="parrilla1.jpg"
              description="Sason D'Mama"
              price="€29.29"
              inventory=""
            />
            {/* Card */}
            <Card
              img="delicates-removebg-preview.png"
              description="Sason D'Mama"
              price="€12.29"
              inventory=""
            />
            {/* Card */}
            <Card
              img="delicates-removebg-preview.png"
              description="Sason D'Mama"
              price="€42.29"
              inventory=""
            />
            {/* Card */}
            <Card
              img="delicates-removebg-preview.png"
              description="Sason D'Mama"
              price="€26.29"
              inventory=""
            />
            {/* Card */}
            <Card
              img="delicates-removebg-preview.png"
              description="Sason D'Mama"
              price="€25.29"
              inventory=""
            />
            {/* Card */}
            <Card
              img="delicates-removebg-preview.png"
              description="Sason D'Mama"
              price="€7.29"
              inventory=""
            />
            {/* Card */}
            <Card
              img="delicates-removebg-preview.png"
              description="Sason D'Mama"
              price="€28.29"
              inventory=""
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;