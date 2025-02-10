import { Footer } from "~/components/footer/footer";
import { Navbar } from "~/components/navbar/navbar";

export default function LayoutAPI() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h1>Tusam Styles</h1>
        <h2>Behold!, for the magic you are about to see</h2>
      </main>
      <Footer />
    </>
  );
}
