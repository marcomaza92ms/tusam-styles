import type { MetaFunction } from "react-router";
import { Footer } from "~/components/footer/footer";
import { Navbar } from "~/components/navbar/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "Tusam Styles" },
    { name: "description", content: "Magic¡¡1" },
  ];
};

export default function Index() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content gap-8">
        <h1>Tusam Styles</h1>
        <h2>Behold!, for the magic you are about to see</h2>
        <img src="/magic.gif" alt="" />
      </main>
      <Footer />
    </>
  );
}
