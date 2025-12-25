import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaBell,
  FaShoppingCart,
  FaUser,
  FaUpload,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import DawacoLogo from "../assets/DawacoLogo.png";
import AuthModal from "./AuthModal"; // 👈 ADD THIS

const Navbar = () => {
  const [openAuth, setOpenAuth] = useState(false); // 👈 STATE

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white text-sm flex justify-between px-10 py-2">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <FaPhoneAlt /> Customer Care: 1800-XXX-XXXX
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope /> dawaco75@gmail.com
          </span>
        </div>
        <div>Free Delivery on orders above ₹500</div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-10 py-4 shadow-md bg-white">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <img src={DawacoLogo} className="w-10 rounded-lg" />
          <div>
            <h1 className="text-xl font-bold text-blue-600">DaWaCo</h1>
            <p className="text-xs text-gray-500">Your Health Partner</p>
          </div>
        </Link>

        {/* Location */}
        <div className="flex flex-col text-sm">
          <span className="text-gray-500">Deliver to</span>
          <select className="border border-gray-100 rounded-md px-2 py-1">
            <option>Select Location</option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Delhi</option>
          </select>
        </div>

        {/* Search */}
        <div className="flex items-center border border-gray-400 rounded-md overflow-hidden w-80">
          <input
            type="text"
            placeholder="Search for medicines"
            className="px-4 py-2 w-full outline-none"
          />
          <button className="bg-blue-600 rounded-md text-white px-5 py-2">
            <FaSearch />
          </button>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5 text-sm">
          
          {/* Reminder */}
          <Link to="/reminder" className="flex items-center gap-2 hover:text-blue-600 font-medium">
            <FaBell /> Reminder
          </Link>

          <select className="border rounded-md px-2 py-1">
            <option>EN</option>
            <option>HI</option>
          </select>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <FaUpload /> Upload Prescription
          </button>

          <div className="relative cursor-pointer text-lg">
            <FaShoppingCart />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>

          {/* SIGN UP / LOGIN */}
          <button
            onClick={() => setOpenAuth(true)} // 👈 OPEN MODAL
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaUser /> Sign Up / Login
          </button>
        </div>
      </div>

      {/* AUTH MODAL */}
      <AuthModal
        isOpen={openAuth}
        onClose={() => setOpenAuth(false)}
      />
    </>
  );
};

export default Navbar;
