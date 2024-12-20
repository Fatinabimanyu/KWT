import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faInstagram,
  faGoogle,
  faWhatsapp,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/LogoKKN.svg";

const footer = () => {
  return (
    <footer className=" bg-[#4d6a6d] z-100 xl:px-10 py-8">
      <div className="flex flex-row">
        <div className="container mx-auto px-2 text-left sm:w-auto xl:w-full h-full">
          <div className="mx-4 flex justify-evenly gap-y-2 xl:flex-row xl:items-start flex-col gap-8 mobile:text-2xl">
            <div className="flex flex-col items-center self-center xl:items-start xl:self-auto">
              <div className="flex items-center sm:px-[15rem] xl:px-0 xl:gap-10 xl:flex-row mb-4 xl:py-12">
                <img
                  src={Logo}
                  alt=""
                  className="transition-all xl:hidden xl:h-28 xl:scale-[1.4]"
                />
                <img
                  src={Logo}
                  alt=""
                  className=" hidden transition-all xl:inline-flex xl:h-28 xl:scale-[1.4]"
                />
                <span className="hidden xl:block">
                  <p className="">
                    <span className="font-bold content-left text-lg xl:text-xl text-white">
                      KWT GOOD FARM
                    </span>
                    <br />
                    <span className="text-center xl:content-left text-md xl:text-lg text-white">
                      Jl. Gardenia Loka, Paku Jaya, Kec. Serpong Utara, Kota
                      Tangerang Selatan, Banten 15324
                    </span>
                  </p>
                </span>
                {/* <p className="text-center xl:content-left text-lg text-white">
                  Kecamatan Ngablak, Kabupaten Magelang, Jawa Tengah, 56194
                </p> */}
              </div>
              <span className="xl:hidden">
                <p className="font-bold text-center text-lg text-white lg:mt-6">
                  KWT GOOD FARM
                </p>
                <p className="text-center text-base text-white lg:mt-6 mb-2">
                  Jl. Gardenia Loka, Paku Jaya, Kec. Serpong Utara, Kota
                  Tangerang Selatan, Banten 15324
                </p>
              </span>
            </div>
            {/* quick link */}
            <div className="flex flex-col text-lg text-white xl:gap-2 xl:text-xl gap-2 my-6">
              <div className="flex flex-col text-lg gap-2">
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  Beranda
                </Link>
                {/* <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/artikel"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  Artikel
                </Link> */}
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/kegiatan"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  Kegiatan
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/umkm"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  UMKM
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  to="/profil-kelompok"
                  className="w-fit transition-colors hover:text-yellow-500 mobile:text-xl"
                >
                  Profil Kelompok
                </Link>
              </div>
            </div>
            {/* kontak person whatsapp */}
            <div className="flex flex-col text-base xl:text-lg text-white gap-2 xl:py-6">
              <div className="flex flex-col gap-2">
                <p className="font-bold">Hubungi Kami</p>
                <div>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    color="white"
                    size="1x"
                    className="transition-all"
                  ></FontAwesomeIcon>{" "}
                  Facebook
                  {/* <a
                    href={"https://wa.me/6282257223474"}
                    rel="noreferrer"
                    target="_blank"
                    className="group w-fit transition-colors hover:text-yellow-500"
                  >
                    <p>(+62)822-5722-3474 (Fatin)</p>
                  </a> */}
                  <a
                    href={
                      "https://www.facebook.com/profile.php?id=61556344400076"
                    }
                    rel="noreferrer"
                    target="_blank"
                    className="group w-fit transition-colors hover:text-yellow-500"
                  >
                    <p>KWT GOOD FARM</p>
                  </a>
                </div>
                <a
                  href={"https://www.youtube.com/@PetaniGoodfarm"}
                  rel="noreferrer"
                  target="_blank"
                  className="group w-fit transition-colors hover:text-yellow-500"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size="sm"
                    color="white"
                    className="transition-all group-hover:text-yellow-500"
                  ></FontAwesomeIcon>{" "}
                  Youtube
                  <p>Petani Good Farm</p>
                </a>
                <a
                  href={
                    "https://www.instagram.com/kwt.goodfarm?igsh=aW9iNTJsbDdhdmY2"
                  }
                  rel="noreferrer"
                  target="_blank"
                  className="group w-fit transition-colors hover:text-yellow-500"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    color="white"
                    size="1x"
                    className="transition-all  group-hover:text-yellow-500"
                  ></FontAwesomeIcon>{" "}
                  Instagram
                  <p>KWT GOOD FARM</p>
                </a>
                {/* <p>
                  (+62)813-9213-6199 (Priyo)
                  <br />
                  dsgirirejongablak@gmail.com
                </p> */}
              </div>
            </div>
            {/* <div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <p className="text-xs text-white bg-[#4d6a6d] mt-3 py-2">
        Developed by Tim KKN-PPM UGM - Bahari Wongsorejo 2023 - Warna-Warni
        Wongsorejo 2024
      </p> */}
    </footer>
  );
};

export default footer;
