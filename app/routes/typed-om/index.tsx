import { useEffect, useRef } from "react";
import { Footer } from "~/components/footer/footer";
import { Navbar } from "~/components/navbar/navbar";

import "./index.css";

export default function TypedOM() {
  const elementRef = useRef<HTMLDivElement>(null);

  /* CSSOM */
  useEffect(() => {
    if (elementRef.current) {
      /* By Element */
      /* elementRef.current.style.width = "300px"; */
      /* console.log('elementRef', elementRef.current.style.width); */
      /* console.log('typeof elementRef', typeof elementRef.current.style.width); */
      /* elementRef.current.style.setProperty("--some-color", "green"); */
      /* elementRef.current.style.setProperty("width", "300px"); */
      /* console.log('elementRef css variable', elementRef.current.style.getPropertyValue("--some-color")); */
      /* console.log('elementRef seProperty', elementRef.current.style.getPropertyValue("width")); */
      /* By Global Document */
      /* console.log(document.styleSheets); */
      /* console.log(typeof document.documentElement.style.width); */
      /* console.log(document.documentElement.style.width); */
      /* console.log(window.getComputedStyle(elementRef.current).width); */
      /* document.documentElement.style.setProperty("--some-color", "green"); */
      /* console.log(document.documentElement.style.getPropertyValue("--some-color")); */
    }
  });

  /* Typed OM */
  useEffect(() => {
    if (elementRef.current) {
      /* console.log('computedStyleMap', elementRef.current.computedStyleMap()); */
      /* console.log('attributeStyleMap' elementRef.current.attributeStyleMap); */
      /* const elementWidth = elementRef.current.computedStyleMap().get("width"); */
      /* elementRef.current.attributeStyleMap.set("--some-color", "green"); */
      /* const { value, unit } = elementWidth; */
      /* console.log('elementWidth', value, unit); */
      /* const operation = new CSSMathSum(CSS[unit](value), CSS.px(42)).toString(); */
      /* elementRef.current.attributeStyleMap.set("--custom-width", operation); */
      /* console.log('operation', operation, typeof operation); */
    }
  });

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="content">
        <h1>Typed OM</h1>
        <section>
          <div
            ref={elementRef}
            className="my-precious-div m-8 grid place-items-center"
          >
            <p>Wololo!!!</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
