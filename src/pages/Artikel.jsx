import { HtmlHead } from "../components/HtmlHead";
import ArtikelInformasi from "../components/artikel/ArtikelInformasi";
import ArtikelPilihan from "../components/artikel/ArtikelPilihan";

export default function Eduwisata() {
  return (
    <>
      <HtmlHead
        title="Eduwisata"
        decription="[insert page description]"
        link="/Eduwisata"
      />
      <main className="overflow-hidden">
        <ArtikelPilihan />
        {/* <ArtikelInformasi /> */}
      </main>
    </>
  );
}
