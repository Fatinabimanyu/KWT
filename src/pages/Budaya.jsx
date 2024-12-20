import { Link } from "react-router-dom";

import Budaya1 from "../components/budaya/budaya1";
import Budaya2 from "../components/budaya/budaya2";
import { HtmlHead } from "../components/HtmlHead";

export default function Budaya() {
  return (
    <>
      <HtmlHead
        title="Profil Kelompok"
        decription="[insert page description]"
        link="/profil-kelompok"
      />
      <main className="overflow-hidden bg-basic">
        <Budaya1 />
      </main>
    </>
  );
}
