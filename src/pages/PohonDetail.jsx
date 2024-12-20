import { useParams } from "react-router-dom";
import CemaraLaut from "../assets/artikel/cemara udang.png";
import Kelapa from "../assets/artikel/kelapa.png";
import Kelor from "../assets/artikel/Kelor.png";
import Ketapang from "../assets/artikel/ketapang.png";
import Lamtoro from "../assets/artikel/lamtoro.png";
import Mengkudu from "../assets/artikel/Mengkudu.png";
import WaruLaut from "../assets/artikel/waru laut.png";

export default function PohonDetail() {
  const { pohonId } = useParams();

  const pohonData = {
    "cemara-laut": {
      title: "Cemara Laut",
      imageUrl: CemaraLaut,
      description: "Ini adalah pohon Cemara Laut.",
    },
    kelapa: {
      title: "Kelapa",
      imageUrl: Kelapa,
      description: "Ini adalah pohon Kelapa.",
    },
    kelor: {
      title: "Kelor",
      imageUrl: Kelor,
      description: "Ini adalah pohon Kelor.",
    },
    ketapang: {
      title: "Ketapang",
      imageUrl: Ketapang,
      description: "Ini adalah pohon Ketapang.",
    },
    lamtoro: {
      title: "Lamtoro",
      imageUrl: Lamtoro,
      description: "Ini adalah pohon Lamtoro.",
    },
    mengkudu: {
      title: "Mengkudu",
      imageUrl: Mengkudu,
      description: "Ini adalah pohon Mengkudu.",
    },
    "waru-laut": {
      title: "Waru Laut",
      imageUrl: WaruLaut,
      description: "Ini adalah pohon Waru Laut.",
    },
  };

  const pohon = pohonData[pohonId];

  if (!pohon) {
    return <div>Pohon tidak ditemukan.</div>;
  }

  return (
    <div className="bg-basic py-24 xl:py-24 pb-8 px-8 xl:px-24">
      <img src={pohon.imageUrl} alt={pohon.title} />
    </div>
  );
}
