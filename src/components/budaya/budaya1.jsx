import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/profil.JPG";
import gambar2 from "../../assets/budaya/pawai.jpg";
import gambar3 from "../../assets/agrowisata/gogik_c.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Budaya1 = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div className="items-center bg-basic pt-24 pb-12 px-8 xl:px-24">
      <div className="">
        <div
          className="relative text-light-blue items-center text-sm"
          id="gogik"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="pointer-events-none">
            <div className="mt-1 sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="font-black text-light-blue font-Satisfy text-2xl sm:text-3xl text-center xl:text-4xl mb-3">
                Profil Kelompok
              </div>
              <div className="font-bold text-xl text-left mb-2 xl:hidden">
                Tujuan
              </div>
              <p className="text-justify xl:hidden">
                Meningkatkan pemahaman wanita tani atau istri petani, tentang
                besarnya potensi pertanian, sehingga menyiapkan generasi yang
                sadar potensi lingkungan. Menjadi penyokong moril perjuangan
                dalam rangka meningkatkan kejahteraan masyarakat melalui usaha
                pertanian. Membudayakan gaya hidup petani yang menyenangkan dan
                penuh manfaat. Mewujudkan peningkatan katahanan pangan dan
                ekonomi masyarakat melalui usaha pertanian.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-2 mt-3 gap-3 xl:gap-6 pt-4">
            <div className="xl:row-span-1 xl:col-span-1 hidden xl:block text-xl text-justify">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Tujuan
              </div>
              1. Meningkatkan pemahaman wanita tani atau istri petani, tentang
              besarnya potensi pertanian, sehingga menyiapkan generasi yang
              sadar potensi lingkungan.
              <br />
              2. Menjadi penyokong moril perjuangan dalam rangka meningkatkan
              kejahteraan masyarakat melalui usaha pertanian.
              <br />
              3. Membudayakan gaya hidup petani yang menyenangkan dan penuh
              manfaat.
              <br />
              4. Mewujudkan peningkatan katahanan pangan dan ekonomi masyarakat
              melalui usaha pertanian.
            </div>
            <div className="flex flex-col justify-center transform col-span-2 xl:col-span-1 xl:pb-0 items-center">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2 text-red-500">
                Visi dan Misi
              </div>
              <div className="font-bold text-xl xl:text-3xl text-left mb-2 text-black">
                Visi
              </div>
              <div className="font-bold text-xl xl:text-xl ">
                Kelompok Wanita Tani (KWT) GOOD FARM memiliki visi untuk
                menjadikan Wanita Tani sebagai pendukung ekonomi keluarga dalam
                pemanfaatan sumber daya alam yang ada.
              </div>
              <div className="font-bold text-xl xl:text-3xl text-left mb-2 text-green-500">
                Misi
              </div>
              <div className="font-bold text-xl xl:text-xl ">
                1. Meningkatkan kesejahteraan keluarga petani.
                <br />
                2. Meningkatkan kualitas hidup petani.
                <br />
                3. Meningkatkan pengetahuan dan keterampilan petani.
                <br />
                4. Meningkatkan kesejahteraan keluarga petani.
              </div>
            </div>
            <div className="flex justify-center items-center col-span-2 mt-6">
              <img
                className="rounded-xl object-cover xl:h-[50vh] w-auto"
                src={gambar1}
                alt="Gambar tujuan, visi, dan misi"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budaya1;
