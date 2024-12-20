import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/budi.jpg";
import gambar2 from "../../assets/agrowisata/hid.JPG";
import gambar3 from "../../assets/agrowisata/konv.JPG";
import gambar4 from "../../assets/agrowisata/pem.JPG";
import gambar5 from "../../assets/agrowisata/peng.JPG";
import sunrise3 from "../../assets/agrowisata/sunrisee.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

const Agrowisata1 = () => {
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
                Kegiatan
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-6 pt-4 items-center">
            <div className="text-xl text-justify">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Budidaya pertanian hidroponik
              </div>
              <p>
                Pertanian hidroponik adalah metode budidaya tanaman yang tidak
                menggunakan media tanam berupa tanah. Sebagai gantinya, tanaman
                ditanam pada media inert seperti rockwool, cocopeat, atau
                styrofoam yang dibasahi dengan larutan nutrisi. Larutan nutrisi
                ini mengandung semua zat hara yang dibutuhkan tanaman untuk
                tumbuh optimal.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-xl object-cover xl:h-[60vh] h-full"
                src={gambar2}
                alt="Budidaya pertanian hidroponik"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-6 pt-4 items-center">
            <div className="text-xl text-justify">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Budidaya pertanian Aquaponik
              </div>
              <p>
                Pertanian Akuaponik adalah sebuah sistem budidaya inovatif yang
                menggabungkan dua metode pertanian, yaitu akuakultur(budidaya
                ikan) dan hidroponik (budidaya tanaman tanpa media tanah). Dalam
                sistem ini, keduanya saling melengkapi dan menciptakan siklus
                hidup yang berkelanjutan.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-xl object-cover xl:h-[60vh] h-full"
                src={gambar1}
                alt="Menanam sayuran"
              />
            </div>
          </div>{" "}
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-6 pt-4 items-center">
            <div className="text-xl text-justify">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Budidaya pertanian konvensional
              </div>
              <p>
                Pertanian konvensional adalah sistem pertanian yang sudah lama
                digunakan dan mengandalkan pada penggunaan input eksternal
                seperti pupuk kimia, pestisida, dan herbisida untuk meningkatkan
                produktivitas. Sistem ini juga seringkali menggunakan varietas
                tanaman unggul hasil rekayasa genetika dan teknik budidaya
                intensif.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-xl object-cover xl:h-[60vh] h-full"
                src={gambar3}
                alt="Budidaya pertanian konvensional"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-6 pt-4 items-center">
            <div className="text-xl text-justify">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Pemasaran hasil kebun dan UMKM
              </div>
              <p>
                Pemasaran hasil kebun adalah serangkaian kegiatan yang dilakukan
                untuk menjual produk-produk pertanian yang dihasilkan dari
                kebun, mulai dari perencanaan, penentuan harga, promosi, hingga
                distribusi produk tersebut ke tangan konsumen.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-xl object-cover xl:h-[60vh] h-full"
                src={gambar4}
                alt="Pemasaran hasil kebun dan UMKM"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-6 pt-4 items-center">
            <div className="text-xl text-justify">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Pengolahan makanan hasil kebun melalui UMKM
              </div>
              <p>
                Pengolahan makanan hasil kebun adalah serangkaian proses yang
                dilakukan untuk mengubah hasil panen dari kebun menjadi produk
                makanan yang siap dikonsumsi atau diolah lebih lanjut. Proses
                ini melibatkan berbagai teknik dan metode, mulai dari yang
                sederhana hingga yang kompleks, dengan tujuan meningkatkan nilai
                tambah, memperpanjang masa simpan, dan menciptakan produk yang
                lebih beragam.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="rounded-xl object-cover xl:h-[60vh] h-full"
                src={gambar5}
                alt="PPengolahan makanan hasil kebun melalui UMKM"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-6 pt-4 items-center">
            <div className="text-xl text-justify">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Budidaya Perikanan
              </div>
              <p>
                Budidaya Perikanan adalah suatu kegiatan yang dilakukan manusia
                untuk membudidayakan atau membiakkan berbagai jenis biota air,
                seperti ikan, udang, kerang, dan rumput laut, dalam lingkungan
                yang terkendali. Tujuan utama dari budidaya perikanan adalah
                untuk meningkatkan produksi sumber daya perikanan, memenuhi
                kebutuhan pangan, serta mengembangkan sektor perikanan secara
                berkelanjutan.
              </p>
            </div>
            <div className="flex justify-center items-center">
              {/* <img
                className="rounded-xl object-cover xl:h-[60vh] h-full"
                src={gambar5}
                alt="Pemasaran hasil kebun dan UMKM"
              /> */}
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-6 pt-4 items-center">
            <div className="text-xl text-justify">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Budidaya Peternakan ayam kampung
              </div>
              <p>
                Budidaya peternakan ayam kampung adalah kegiatan membudidayakan
                atau memelihara ayam kampung dengan tujuan untuk menghasilkan
                produk seperti daging, telur, atau bahkan sebagai hewan
                peliharaan. Ayam kampung memiliki ciri khas rasa daging yang
                lebih gurih dan tekstur yang lebih kenyal dibandingkan ayam
                broiler.
              </p>
            </div>
            <div className="flex justify-center items-center">
              {/* <img
                className="rounded-xl object-cover xl:h-[60vh] h-full"
                src={gambar5}
                alt="Pemasaran hasil kebun dan UMKM"
              /> */}
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-6 pt-4 items-center">
            <div className="text-xl text-justify">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Budidaya Lebah Klanceng
              </div>
              <p>
                Budidaya lebah klanceng adalah kegiatan membudidayakan atau
                beternak lebah klanceng (Trigona spp.) dengan tujuan mendapatkan
                produk-produknya seperti madu, propolis, dan bee pollen. Lebah
                klanceng merupakan jenis lebah tanpa sengat yang memiliki ukuran
                tubuh lebih kecil dibandingkan lebah madu.
              </p>
            </div>
            <div className="flex justify-center items-center">
              {/* <img
                className="rounded-xl object-cover xl:h-[60vh] h-full"
                src={gambar5}
                alt="Pemasaran hasil kebun dan UMKM"
              /> */}
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-6 pt-4 items-center">
            <div className="text-xl text-justify">
              <div className="font-bold text-xl xl:text-3xl text-left mb-2">
                Kegiatan Asman toga
              </div>
              <p>
                Asman Toga adalah singkatan dari Asuhan Mandiri dengan
                memanfaatkan Taman Obat Keluarga. Ini merupakan sebuah program
                yang bertujuan untuk memberdayakan masyarakat agar dapat menjaga
                kesehatan diri dan keluarganya secara mandiri dengan
                memanfaatkan tanaman obat yang ditanam sendiri di rumah.
              </p>
            </div>
            <div className="flex justify-center items-center">
              {/* <img
                className="rounded-xl object-cover xl:h-[60vh] h-full"
                src={gambar5}
                alt="Pemasaran hasil kebun dan UMKM"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agrowisata1;
