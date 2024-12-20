import { useState } from "react";
import gambar1 from "../../assets/umkm/fira.jpg";
import gambar2 from "../../assets/umkm/buah naga.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Umkm1 = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div className="items-center bg-[#FFFDEC] py-24 xl:py-24 pb-8 px-8 xl:px-24">
      {/* <div className="">
        <div
          className="relative items-center text-white text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="text-[#545B77] font-Satisfy text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
                Fira Bawang Goreng dan Keripik Buah
                <div className="text-[#545B77] sm:text-base text-justify mr-10 text mt-4">
                  Fira adalah pilihan terbaik bagi pecinta camilan berkualitas.
                  Fira mengkhususkan diri dalam menyediakan bawang goreng renyah
                  yang sempurna sebagai pelengkap hidangan favorit, serta
                  keripik buah yang terbuat dari buah-buahan segar pilihan.
                  Dengan bahan-bahan alami dan proses pengolahan yang higienis,
                  Fira memastikan setiap produk yang dihasilkan memiliki cita
                  rasa yang otentik dan tekstur yang memuaskan. Nikmati setiap
                  gigitan sebagai pengalaman kuliner yang menggugah selera dan
                  sehat, karena di Fira selalu mengutamakan kualitas dan
                  kepuasan pelanggan.
                </div>
              </div>
            </div>
          </div>
          <div className="container flex-col xl:flex-row flex items-center justify-center">
            <div className="transform hover:transition-all hover:scale-[105%] pb-4 xl:pb-0 px-4">
              <img
                className="h-64 w-auto object-cover"
                src={gambar1}
                alt="rectangle"
              ></img>
            </div>
            <div className="transform hover:transition-all hover:scale-[105%] pb-4 xl:pb-0 px-4">
              <img
                className="h-64 w-auto object-cover"
                src={gambar2}
                alt="rectangle"
              ></img>
            </div>
          </div>
          <a href="https://wa.me/6287809291120">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              class="mt-4 rounded bg-[#3F4937] py-2 px-6 font-Montserrat text-lg md text-white transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)]  mobile:text-sm"
            >
              Hubungi
            </button>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Umkm1;
