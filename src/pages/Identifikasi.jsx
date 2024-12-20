import AOS from "aos";
import "aos/dist/aos.css";
import ArticleCardPilihan from "../components/ArticleCardPilihan";
import { useNavigate } from "react-router-dom";

export default function Identifikasi() {
  AOS.init();
  AOS.refresh();
  AOS.refreshHard();

  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-[#E7D4B5] min-h-screen bg-cover pt-24 xl:pt-24 pb-8 px-8 xl:px-24"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="font-black">
          <div className="mt-1 justify-center sm:gap-1.5 md:gap-1 xl:gap-1 mobile:gap-1.5">
            <div className="text-[#545B77] font-Satisfy text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-6">
              Hasil Indentifikasi Pohon di Pesisir Pantai Bimo
            </div>
          </div>
          <div className="borderflex flex-col items-center px-6">
            <div className="grid grid-cols-1 gap-6 w-full max-w-screen">
              <ArticleCardPilihan
                writer={"Yanuar W"}
                date={"14 Agustus 2024"}
                title={"Cemara Laut"}
                content={
                  "Dapatkan hasil indentifikasi pohon cemara laut disini"
                }
                onClick={() => {
                  navigate("/artikel/identifikasi/cemara-laut");
                }}
              />
              <ArticleCardPilihan
                writer={"Yanuar W"}
                date={"14 Agustus 2024"}
                title={"Kelapa"}
                content={"Dapatkan hasil indentifikasi pohon kelapa disini"}
                onClick={() => {
                  navigate("/artikel/identifikasi/kelapa");
                }}
              />
              <ArticleCardPilihan
                writer={"Yanuar W"}
                date={"14 Agustus 2024"}
                title={"Kelor"}
                content={"Dapatkan hasil indentifikasi pohon kelor disini"}
                onClick={() => {
                  navigate("/artikel/identifikasi/kelor");
                }}
              />
              <ArticleCardPilihan
                writer={"Yanuar W"}
                date={"14 Agustus 2024"}
                title={"Ketapang"}
                content={"Dapatkan hasil indentifikasi pohon ketapang disini"}
                onClick={() => {
                  navigate("/artikel/identifikasi/ketapang");
                }}
              />
              <ArticleCardPilihan
                writer={"Yanuar W"}
                date={"14 Agustus 2024"}
                title={"Lamtoro"}
                content={"Dapatkan hasil indentifikasi pohon lamtoro disini"}
                onClick={() => {
                  navigate("/artikel/identifikasi/lamtoro");
                }}
              />
              <ArticleCardPilihan
                writer={"Yanuar W"}
                date={"14 Agustus 2024"}
                title={"Mengkudu"}
                content={"Dapatkan hasil indentifikasi pohon mengkudu disini"}
                onClick={() => {
                  navigate("/artikel/identifikasi/mengkudu");
                }}
              />
              <ArticleCardPilihan
                writer={"Yanuar W"}
                date={"14 Agustus 2024"}
                title={"Waru Laut"}
                content={"Dapatkan hasil indentifikasi pohon waru laut disini"}
                onClick={() => {
                  navigate("/artikel/identifikasi/waru-laut");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
