import { Link } from "react-router-dom";

import Budaya1 from "../components/budaya/budaya1";
import Budaya2 from "../components/budaya/budaya2";
import { HtmlHead } from "../components/HtmlHead";

export default function Budaya() {
  return (
    <>
      <HtmlHead
        title="Budaya"
        decription="[insert page description]"
        link="/budaya"
      />
      <main className="overflow-hidden bg-basic">
        <Budaya1 />
      </main>
    </>
  );
}
