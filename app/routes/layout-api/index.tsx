import { useLocation } from "react-router";
import { useEffect } from "react";
import { Footer } from "~/components/footer/footer";
import { Navbar } from "~/components/navbar/navbar";

import "./index.css";

export default function LayoutAPI() {
  const elements = Array.from(
    { length: 10 },
    (_, index) => `https://cataas.com/cat?${index + 1}`
  );
  const location = useLocation();

  useEffect(() => {
    if (CSS && CSS.layoutWorklet) {
      CSS.layoutWorklet.addModule("/centering-worklet.js");
      CSS.layoutWorklet.addModule("/masonry-worklet.js");
    }
  }, [location]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <h1>Layout API</h1>
        <section>
          <div className="my-precious-div">
            <p className="relative z-50">Wololo!!!</p>
            <div className="relative bg-slate-500 h-[100px] w-[100px]"></div>
          </div>
        </section>
        <section>
          <div className="my-precious-layout">
            {elements.map((cat, index) => (
              <div key={index}>
                <img src={cat} alt="" />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
