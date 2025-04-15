import { useState } from "react";
import gambar1 from "../../assets/umkm/fira.jpg";
import gambar2 from "../../assets/umkm/buah naga.jpg";
import gambar3 from "../../assets/umkm/umkm1.JPG";
import gambar4 from "../../assets/umkm/umkm2.JPG";
import gambar5 from "../../assets/umkm/umkm3.JPG";
import gambar6 from "../../assets/umkm/umkm4.JPG";
import gambar7 from "../../assets/umkm/umkm5.JPG";
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
      <div className="">
        <div
          className="relative items-center text-white text-sm"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
            <div className="text-[#545B77] text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
  Produk UMKM KWT Good Farm
  <div className="text-[#545B77] text-sm text-justify font-thin mt-4">
    Produk UMKM KWT Good Farm dijual melalui UMKM Bina Indah Lestari, yaitu UMKM binaan CSR PT. Indah Kiat Pulp&Paper Tbk. Tangerang Mill. Produk yang dihasilkan merupakan hasil panen sayuran di lahan KWT Good Farm dan hasil pengolahan pertanian lahan  KWT Good Farm menjadi berbagai macam camilan ringan yang lezat dan bergizi. Selain itu, beberapa UMKM yang terdapat di Kota Tangerang Selatan juga difasilitasi penjualannya melalui UMKM Bina Indah Lestari ini. Berikut merupakan katalog produk UMKM Bina Indah Lestari yang bisa dipesan melalui website ini dengan harga 25.000 semua, kecuali keripik kentang 45.000!
  </div>
</div>

            </div>
          </div>
          <div className="container flex flex-wrap justify-center items-center gap-4 px-4">
  {[gambar3, gambar4, gambar5, gambar6, gambar7].map((gambar, index) => (
    <div
      key={index}
      className="transform hover:transition-all hover:scale-[105%] pb-4"
    >
      <img
        className="h-64 w-auto object-cover"
        src={gambar}
        alt={`rectangle-${index}`}
      />
    </div>
  ))}
</div>
          <a href="https://wa.me/6289524875254">
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
      </div>
    </div>
  );
};

export default Umkm1;
