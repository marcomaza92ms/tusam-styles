import { Footer } from "~/components/footer/footer";
import { Navbar } from "~/components/navbar/navbar";

import "./index.css";

export default function PaintAPI() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <h1>Paint API</h1>
        <section>
          <div className="my-precious-div m-8 grid place-items-center">
            <p>Wololo!!!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
