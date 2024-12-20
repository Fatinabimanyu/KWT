import AOS from "aos";
import "aos/dist/aos.css";
import ArticleCardPilihan from "../ArticleCardPilihan";
import { saveAs } from "file-saver";
import pdfFile from "../../files/Buku Saku Ternak.pdf";
import { useNavigate } from "react-router-dom";

export default function ArtikelPilihan() {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const navigate = useNavigate();

  return (
    <div
      className="bg-[#E7D4B5] bg-cover py-24 xl:py-24 pb-8 px-8 xl:px-24"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="font-black pointer-events-none">
        <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
          <div className="text-[#545B77] font-Satisfy text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
            Artikel Pilihan Bimorejo
            <div className="text-[#545B77] sm:text-base text-center mr-10 text">
              Telusuri informasi pilihan tentang Bimorejo
            </div>
          </div>
        </div>
      </div>
      <div className="borderflex flex-col items-center px-6">
        <div className="grid grid-cols-1 gap-6 w-full max-w-screen">
          <ArticleCardPilihan
            writer={"Sekar"}
            date={"11 Agustus 2024"}
            title={"Buku Saku Ternak Panduan Beternak"}
            content={
              "Dapatkan tata cara panduan beternak untuk semua orang disini"
            }
            onClick={() => {
              saveAs(pdfFile, "Buku Saku Ternak.pdf");
            }}
          />
          <ArticleCardPilihan
            writer={"Yanuar W"}
            date={"14 Agustus 2024"}
            title={"Identifikasi Tumbuhan di Pesisir Pantai Bimo"}
            content={
              "Dapatkan hasil indentifikasi berbagai tumbuhan di pesisir Pantai Bimo disini"
            }
            onClick={() => {
              navigate("/artikel/identifikasi");
            }}
          />
        </div>
      </div>
    </div>
  );
}
