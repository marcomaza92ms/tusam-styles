import { Footer } from "~/components/footer/footer";
import { Navbar } from "~/components/navbar/navbar";

import "./index.css";
import { useLocation } from "react-router";
import { useEffect } from "react";

export default function PaintAPI() {
  const location = useLocation();
  useEffect(() => {
    // @ts-expect-error: CSS.layoutWorklet is not defined in TypeScript types
    if (CSS && CSS.paintWorklet) {
      // @ts-expect-error: CSS.layoutWorklet is not defined in TypeScript types
      CSS.paintWorklet.addModule("/worklets/paint/border-worklet.js");
      // @ts-expect-error: CSS.layoutWorklet is not defined in TypeScript typess
      CSS.paintWorklet.addModule("/worklets/paint/mondrian-worklet.js");
    }
  }, [location]);
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <h1>Paint API</h1>
        <section className="my-8">
          <h2 className="text-center">Border Reverse</h2>
          <div className="my-precious-div m-8 grid place-items-center">
            <p>Wololo!!!</p>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-center">Mondrian</h2>
          <div className="bg-slate-300">
            <div className="my-mondrian"></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
