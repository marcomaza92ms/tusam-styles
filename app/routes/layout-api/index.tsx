import { useLocation } from "react-router";
import { useEffect } from "react";
import { Footer } from "~/components/footer/footer";
import { Navbar } from "~/components/navbar/navbar";
import "./index.css";

export default function LayoutAPI() {
  const elements = Array.from(
    { length: 0 },
    (_, index) => `https://cataas.com/cat?${index + 1}`
  );
  const location = useLocation();
  useEffect(() => {
    // @ts-expect-error: CSS.layoutWorklet is not defined in TypeScript types
    if (CSS && CSS.layoutWorklet) {
      // @ts-expect-error: CSS.layoutWorklet is not defined in TypeScript types
      CSS.layoutWorklet.addModule("/worklets/layout/centering-worklet.js");
      // @ts-expect-error: CSS.layoutWorklet is not defined in TypeScript types
      CSS.layoutWorklet.addModule("/worklets/layout/masonry-worklet.js");
    }
  }, [location]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <h1>Layout API</h1>
        <section className="my-8">
          <h2 className="text-center">Center all the things</h2>
          <div className="my-precious-div">
            <p className="relative z-50">Wololo!!!</p>
            <div className="relative bg-slate-500 h-[100px] w-[100px]"></div>
          </div>
        </section>
        <section className="my-8">
          <h2 className="text-center">Masonry</h2>
          <div className="my-precious-masonry">
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
