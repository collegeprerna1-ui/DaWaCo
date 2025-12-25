import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Reminder from "./components/Reminder";
import HeroSlider from "./components/HeroSlider";
import CategorySection from "./components/CategorySection";
import MedicinesSection from "./components/MedicinesSection";
import FeaturedMedicines from "./components/FeaturedMedicines";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <div className="p-6">
        <HeroSlider />
      </div>
      <CategorySection />
      <MedicinesSection />
      <FeaturedMedicines />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* ✅ HOME ROUTE */}
        <Route path="/" element={<Home />} />

        {/* REMINDER ROUTE */}
        <Route path="/reminder" element={<Reminder />} />
      </Routes>
    </>
  );
}

export default App;
