import { useState } from "react";
import { Link } from "react-router-dom";
import gambar1 from "../../assets/agrowisata/edu1.JPEG";
import gambar2 from "../../assets/agrowisata/edu2.JPEG";
import gambar3 from "../../assets/agrowisata/edu3.JPG";
import gambar4 from "../../assets/agrowisata/edu4.jpg";
import gambar5 from "../../assets/agrowisata/edu5.JPG";
import gambar6 from "../../assets/agrowisata/edu6.JPG";
import gambar7 from "../../assets/agrowisata/edu7.JPG";
import gambar8 from "../../assets/agrowisata/1.png";
import gambar9 from "../../assets/agrowisata/2.png";


import sunrise3 from "../../assets/agrowisata/sunrisee.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

const ArtikelPilihan = () => {
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
                Eduwisata
              </div>
            </div>
          </div>
          <div className="text-xl xl:text-2xl text-justify leading-relaxed my-6">
  Eduwisata urban farming KWT Good Farm terletak di Jl. Gardenia Loka, Paku Jaya, Kec. Serpong Utara, Kota Tangerang Selatan, Banten. Eduwisata urban farming KWT Good Farm adalah konsep wisata yang menggabungkan unsur edukasi dan pertanian di kawasan urban (perkotaan). Konsep ini bertujuan untuk memberikan pengalaman belajar yang menyenangkan dan interaktif tentang pertanian di lingkungan perkotaan. Tidak hanya memberikan pengetahuan tentang cara bercocok tanam, tetapi juga memperkenalkan pentingnya menjaga ketahanan pangan, memanfaatkan lahan terbatas, serta gaya hidup sehat dan berkelanjutan. Selain itu, pada eduwisata ini juga memperkenalkan permainan tradisional yang kemungkinan besar anak kecil zaman sekarang sudah jarang memainkannya, seperti permainan egrang, bakiak, engklek, congklak, hula hoop, panahan, dan beberapa permainan tradisional lainnya.
  <div className="flex flex-wrap justify-center gap-4 pb-4">
  {[gambar1,gambar2,gambar3, gambar4, gambar5, gambar6, gambar7].map((gambar, index) => (
    <div
      key={index}
      className="transform hover:transition-all hover:scale-[105%]"
    >
      <img
        className="h-64 w-auto object-cover"
        src={gambar}
        alt={`rectangle-${index}`}
      />
    </div>
  ))}
</div>

Untuk lebih jelasnya, kegiatan eduwisata urban farming KWT Good Farm terdiri dari:</div>

<div className="grid grid-cols-1 xl:grid-cols-2 mt-3 gap-6 pt-4 items-center">
  <div className="text-xl text-justify">
    <div className="font-bold text-xl xl:text-3xl text-left mb-2">
      1. Kegiatan Belajar Pertanian
    </div>
    <div className="md:w-1/2 text-[#4A4A7C]">
      <ul className="list-decimal list-inside space-y-3">
        <li>
          <span className="font-semibold">Pengenalan Tanaman:</span> Peserta akan diajak untuk mengenal berbagai jenis tanaman yang cocok ditanam di perkotaan, seperti sayuran, buah-buahan, dan tanaman hias. Mereka akan belajar tentang karakteristik masing-masing tanaman, cara menanam, merawat, dan memanennya.
        </li>
        <li>
          <span className="font-semibold">Teknik Bercocok Tanam:</span> Peserta akan belajar berbagai teknik bercocok tanam yang efisien dan ramah lingkungan, seperti hidroponik, vertikultur, dan aquaponik. Mereka akan diajak untuk praktik langsung menanam dan merawat tanaman.
        </li>
        <li>
          <span className="font-semibold">Pengelolaan Kebun:</span> Peserta akan belajar tentang cara mengelola kebun perkotaan yang baik, mulai dari persiapan lahan, pemupukan, pengendalian hama dan penyakit, hingga panen.
        </li>
      </ul>
    </div>
  </div>

  <div className="text-xl text-justify">
    <div className="font-bold text-xl xl:text-3xl text-left mb-2">
      2. Budidaya Perikanan
    </div>
    <div className="md:w-1/2 text-[#4A4A7C]">
      <ul className="list-decimal list-inside space-y-3">
        <li>
          <span className="font-semibold">Pengenalan Ikan:</span> Peserta akan diajak untuk mengenal berbagai jenis ikan yang cocok dibudidayakan di perkotaan, seperti ikan lele, nila, dan patin. Mereka akan belajar tentang karakteristik masing-masing ikan, cara memelihara, memberi makan, dan memanennya.
        </li>
        <li>
          <span className="font-semibold">Teknik Budidaya Ikan:</span> Peserta akan belajar berbagai teknik budidaya ikan yang efisien dan ramah lingkungan, seperti sistem kolam terpal, kolam bioflok, dan aquaponik (menggabungkan perikanan dan pertanian).
        </li>
        <li>
          <span className="font-semibold">Pengelolaan Kolam:</span> Peserta akan belajar tentang cara mengelola kolam ikan yang baik, mulai dari persiapan kolam, pemberian pakan, pengendalian kualitas air, hingga panen.
        </li>
      </ul>
    </div>
  </div>
</div>
<div className="grid grid-cols-1 xl:grid-cols-3 mt-3 gap-6 pt-4 items-center">
  {/* Nomor 3 */}
  <div className="text-xl text-justify">
    <div className="font-bold text-xl xl:text-3xl text-left mb-2">
      3. Budidaya Peternakan
    </div>
    <div className="md:w-1/2 text-[#4A4A7C]">
      <ul className="list-decimal list-inside space-y-3">
        <li>
          <span className="font-semibold">Pengenalan Hewan Ternak:</span> Peserta akan diajak untuk mengenal berbagai jenis hewan ternak yang cocok dipelihara di perkotaan, seperti ayam, bebek, kambing, dan kelinci. Mereka akan belajar tentang karakteristik masing-masing hewan, cara memelihara, memberi makan, dan merawatnya.
        </li>
        <li>
          <span className="font-semibold">Teknik Beternak:</span> Peserta akan belajar berbagai teknik beternak yang efisien dan ramah lingkungan, seperti sistem kandang modern, pemberian pakan yang tepat, dan pencegahan penyakit.
        </li>
        <li>
          <span className="font-semibold">Pengelolaan Peternakan:</span> Peserta akan belajar tentang cara mengelola peternakan perkotaan yang baik, mulai dari persiapan kandang, pemberian pakan, perawatan kesehatan hewan, hingga panen.
        </li>
      </ul>
    </div>
  </div>

  {/* Nomor 5 - ditaruh di tengah */}
  <div className="text-xl text-justify xl:col-start-2">
    <div className="font-bold text-xl xl:text-3xl text-left mb-2">
       4. Permainan Tradisional
    </div>
    <div className="md:w-1/2 text-[#4A4A7C]">
    <ul className="list-decimal list-inside space-y-3">
        <li>
          <span className="font-semibold">Permainan Anak-anak:</span> Peserta akan diajak untuk bermain berbagai permainan tradisional yang berhubungan dengan pertanian, seperti congklak, dakon, dan ular tangga tani. Permainan ini tidak hanya menyenangkan, tetapi juga mengajarkan nilai-nilai luhur dan kearifan lokal.
        </li>
        <li>
          <span className="font-semibold">Permainan Kelompok:</span> Peserta akan diajak untuk bermain berbagai permainan kelompok yang membutuhkan kerjasama dan kekompakan, seperti bakiak. Permainan ini dapat meningkatkan rasa kebersamaan dan solidaritas antar peserta.
        </li>
      </ul>
    </div>
  </div>

  {/* Nomor 4 */}
  <div className="text-xl text-justify">
    <div className="font-bold text-xl xl:text-3xl text-left mb-2">
    5. Workshop Edukasi Cara Menanam
    </div>
    <div className="md:w-1/2 text-[#4A4A7C]">
    <ul className="list-decimal list-inside space-y-3">
        <li>
          <span className="font-semibold">Menanam Sayuran:</span> Peserta akan diajak untuk mengikuti workshop tentang cara menanam sayuran yang baik dan benar, mulai dari persiapan media tanam, penyemaian benih, penanaman, perawatan, hingga panen.
        </li>
        <li>
          <span className="font-semibold">Menanam Buah-buahan:</span> Peserta akan diajak untuk mengikuti workshop tentang cara menanam buah-buahan yang baik dan benar, mulai dari pemilihan bibit, penanaman, perawatan, hingga panen.
        </li>
        <li>
          <span className="font-semibold">Menanam Tanaman Hias:</span> Peserta akan diajak untuk mengikuti workshop tentang cara menanam tanaman hias yang baik dan benar, mulai dari pemilihan jenis tanaman, penanaman, perawatan, hingga perbanyakan.
        </li>
      </ul>
      
    </div>
  </div>
</div>
<div className="text-[#545B77] text-lg text-justify mt-6 leading-relaxed space-y-4">
  <p>
    <strong>Eduwisata Urban Farming</strong> merupakan kegiatan yang sangat bermanfaat bagi masyarakat perkotaan. 
    Selain memberikan pengetahuan dan keterampilan, kegiatan ini juga dapat meningkatkan kesadaran akan pentingnya menjaga lingkungan dan menerapkan gaya hidup sehat.
  </p>

  <p>
    Harapannya, anak-anak kecil di daerah urban masih tetap bisa mengenal dunia pertanian dan merasakan pengalaman memainkan permainan tradisional.
  </p>

  <p>
    <strong>Eduwisata Urban Farming KWT Good Farm</strong> memiliki rincian paket yang ditawarkan sebagai berikut:
  </p>
</div>
<div className="flex gap-4">
  {[gambar8, gambar9].map((gambar, index) => (
    <div
      key={index}
      className="transform hover:transition-all hover:scale-[105%]"
    >
      <a href={gambar} target="_blank" rel="noopener noreferrer" download>
        <img
          className="h-64 w-auto object-cover cursor-pointer"
          src={gambar}
          alt={`rectangle-${index}`}
        />
      </a>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default ArtikelPilihan;
