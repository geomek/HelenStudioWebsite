import { Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home.jsx";
import Store from "./assets/pages/Store.jsx";
import Tshirts from "./assets/pages/Tshirts.jsx";
import Rings from "./assets/pages/Rings.jsx";
import Necklaces from "./assets/pages/Necklaces.jsx";
import Accessories from "./assets/pages/Accessories.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/store/Tshirts" element={<Tshirts />} />
      <Route path="/store/Rings" element={<Rings />} />
      <Route path="/store/Necklaces" element={<Necklaces />} />
      <Route path="/store/Accessories" element={<Accessories />} />
    </Routes>
  );
}