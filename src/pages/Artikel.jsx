import { HtmlHead } from "../components/HtmlHead";
import ArtikelInformasi from "../components/artikel/ArtikelInformasi";
import ArtikelPilihan from "../components/artikel/ArtikelPilihan";

export default function Artikel() {
  return (
    <>
      <HtmlHead
        title="Artikel"
        decription="[insert page description]"
        link="/artikel"
      />
      <main className="overflow-hidden">
        <ArtikelPilihan />
        <ArtikelInformasi />
      </main>
    </>
  );
}
