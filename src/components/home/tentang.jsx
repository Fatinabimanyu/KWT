import { useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Tentang = () => {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const [width] = useState(window.innerWidth);
  const isDesktop = width > 640;

  return (
    <div className="items-center bg-[#FFFDEC] pt-8 xl:pt-16 pb-8 block px-8 xl:px-24">
      <div className="xl:grid xl:grid-cols-2 flex flex-col">
        <div
          className="relative items-end text-left text-white mobile:text-sm xl:w-[90%]"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="sm:text-3xl md:text-4xl lg:text-5xl xl:mb-5 xl:text-5xl pointer-events-none">
            <div className="mt-1 flex flex-row sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
              <p className="font-Satisfy text-[#545B77] mobile:text-2xl font-bold mb-3">
                Sekilas Kelompok Wanita Tani (KWT) GOOD FARM
              </p>
            </div>
          </div>
          <div className="text-justify text-[#545B77] sm:text-base xl:text-xl">
            Kelompok Wanita Tani (KWT) GOOD FARM merupakan kelompok wanita tani
            yang berdomisili di Cluster Gardenia Loka, Kelurahan Paku Jaya,
            Kecamatan Serpong Utara, Kota Tangerang Selatan, Provinsi Banten.
            Saat ini KWT GOOD FARM kelurahan Paku Jaya Kecamatan Serpong Utara
            Kota Tangerang Selatan memiliki luas lahan sebesar 600 M2. Yang
            terbagi menjadi dua lahan, yaitu lahan hidroponik dan lahan tanaman
            organik. Lahan hidroponik memiliki 916 lubang tanam yang ditanami
            sayuran kangkung, bayam, pakcoy dan kailan. Lahan konvensional
            ditanami sayuran jagung, kembang kol, terong, kangkung, bayam,
            cabai, jahe, kunyit serta tanaman apotik hidup lainnya. Di lahan
            yang terpisah KWT GOOD FARM juga memiliki kolam budidaya lele.
            <br />
            <br />
            {/* Asal muasal nama Bimorejo sendiri diambil dari tokoh yang membuka
            desa ini, yaitu Bimo dari asal Mbah Ranjani yaitu Bima. Pada
            mulanya, Desa Bimorejo adalah dukuh dibawah Desa Bajulmati, dimana
            kepemimpinannya dipimpin oleh kepala dukuh yaitu Kamituwo dan Bayan.
            Seiring perkembangan zaman, dimekarkanlah Bimorejo menjadi satu desa
            pada tahun 2002 yang dibagi menjadi dua dusun yaitu Dusun Bimo di
            wilayah timur dan Dusun Aseman di wilayah barat. */}
            <br />
            <br />
            {/* Dusun Aseman juga mempunyai cerita tersendiri dalam pembentukkannya.
            Pada mulanya, dusun ini dinamakan Aseman karena banyak pohon asem di
            daerah Dusun Aseman, terdapat banyak mitos serta cerita mistis
            sehingga tidak ada yang berani menempatinya, dengan seiring
            perkembangan zaman dan dibentuknya pondok-pondok pesantren, barulah
            pohon-pohon asem tersebut ditebang dan ditempati oleh penduduk
            setempat. */}
            <br />
          </div>
          {/* <Link to="/pasar-rakyat">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              class="mt-4 rounded bg-[#374249] py-2 px-6 font-Montserrat text-lg md text-white transition-all duration-300 ease-out hover:scale-[1] hover:px-[1.33rem] hover:font-bold hover:shadow-[5px_5px_0_rgb(128,128,128)]  mobile:text-sm"
            >
              Selengkapnya
            </button>
          </Link> */}
        </div>

        <div
          className="mt-12 xl:mt-0 flex justify-center items-center container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <iframe
            className="container h-[400px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1759122589274!2d106.67248809572!3d-6.24053201965243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb8a1a255d09%3A0x87f55b798ad775fa!2sKWT%20GOOD%20FARM!5e0!3m2!1sen!2sid"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map_bimorejo"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Tentang;
