import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Agrowisata from "./pages/Agrowisata";
import Umkm from "./pages/Umkm";
import Footer from "./components/footer";
import Budaya from "./pages/Budaya";
import Identifikasi from "./pages/Identifikasi";
import Artikel from "./pages/Artikel";
import PohonDetail from "./pages/PohonDetail";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kegiatan" element={<Agrowisata />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/profil-kelompok" element={<Budaya />} />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/identifikasi" element={<Identifikasi />} />
        <Route
          path="/artikel/identifikasi/:pohonId"
          element={<PohonDetail />}
        />
      </Routes>
      <ToastContainer position="bottom-right" />
      <Footer />
    </div>
  );
}

export default App;
