import { Footer } from "~/components/footer/footer";
import { Navbar } from "~/components/navbar/navbar";

import "./index.css";

export default function CSSProperties() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <h1>CSS Properties</h1>
        <section>
          <div className="my-precious-div m-8 grid place-items-center h-[200px] w-[200px]">
            <p>Wololo!!!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
