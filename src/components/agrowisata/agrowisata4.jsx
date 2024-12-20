import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/gunung.png";
import gambar2 from "../../assets/agrowisata/gunung2.png";
import gambar3 from "../../assets/agrowisata/sunset3.jpg";
import map_muncak from "../../assets/agrowisata/map-muncak.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
// import "./tentang.css";

const Agrowisata4 = () => {
  var settings = {
    dots: true,
    arrows: false,
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
          // initialSlide: 2,
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
    <div
      className="items-center bg-[#545B77] pt-24 pb-16 px-8 xl:px-24"
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <div className="">
        <div className="relative items-center text-white text-sm">
          <div className="font-black pointer-events-none">
            <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <div className="text-[#FFFDEC] font-Satisfy text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
                Daerah Pesawahan
              </div>
            </div>
          </div>
          <Slider {...settings} className="">
            <div className="px-4">
              <img className="rounded-2xl" src={gambar1} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar3} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar1} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar2} alt="rectangle"></img>
            </div>
            <div className="px-4">
              <img className="rounded-2xl" src={gambar3} alt="rectangle"></img>
            </div>
          </Slider>
        </div>
      </div>
      <div className="text-justify flex-col flex xl:flex-row mt-6 xl:mt-6 items-center justify-center xl:px-10">
        <div className="text-[#FFFDEC] sm:text-base xl:text-xl xl:w-full xl:flex-grow mb-4 xl:mb-0">
          Bimorejo memiliki daerah pesawahan yang sangat luas. Banyaknya
          pesawahan di Bimorejo ini juga dilengkapi dengan pemandangan yang
          sangat memanjakan mata. Mayoritas para petani disni menamam bawang
          pada sawah mereka terutama pada bawang merah. Tak hanya pada bawang
          berah mereka juga menaman rumput rumputan, padi, jagung dan masih
          banyak lainnya.
        </div>
        <div className="xl:pb-0 items-center justify-center flex">
          {/* <h3>2</h3> */}
        </div>
      </div>
    </div>
  );
};

export default Agrowisata4;
