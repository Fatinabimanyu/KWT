import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./tentang.css";

const Homepage = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  return (
    <>
      <div className="bg-center bg-cover h-screen bg-homepage-cover opacity-60"></div>
      <div className="container absolute items-center w-auto top-1/2 px-12 text-[#4d6a6d]">
        <p className="font-Montserrat text-left font-bold text-2xl mb-4 sm:text-2xl md:text-3xl lg:text-6xl">
          SELAMAT DATANG
          <br />
          DI GOOD FARM
        </p>
        <p className="text-left sm:text-lg md:text-xl">
          Halo Bestie-Bestie Petani Cantik, Mari Menjelajah Kebun Bersama
          Kelompok Wanita Tani Good Farm!
        </p>
      </div>
    </>
  );
};

export default Homepage;
