import { useState } from "react";
import { animated, useSpring } from "react-spring";
import Nav from "./Nav";

import jennair from "../assets/jennair.png";
import spectrum from "../assets/spectrum.png";

export default function Work() {
  const [show, set] = useState(true);

  const mainStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: { duration: 1000 },
  });

  return (
    <section className="pt-24 min-h-screen dark:text-white">
      <Nav path="/main" toggleFx={set} />
      <animated.div
        style={mainStyles}
        className="h-full flex flex-col justify-center items-center"
      >
        <h2 className="font-display text-4xl">FEATURED WORKS</h2>
        <article className="my-12 px-4 py-8 bg-black text-white md:py-32">
          <div className="mx-auto md:w-5/12">
            <img src={jennair} alt="jennair website"></img>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-16">
            <div className="flex flex-col items-center text-center">
              <h3 className="mt-4 font-display text-xl md:text-4xl md:mt-16">Jennair</h3>
              <p className="mt-4 font-light md:mt-8">
                Participating in creating modern and elegant UI using <span className="font-bold text-[#BD9B60]">React</span> and <span className="font-bold text-[#BD9B60]">Chakra</span>
              </p>
            </div>
            <a
              href="https://www.jennair.com/"
              target="_blank"
              className="border-2 border-[#BD9B60] rounded w-16 grid place-items-center font-bold text-sm md:w-24 md:h-12 hover:bg-white hover:text-black transition"
            >
              Visit
            </a>
          </div>
        </article>
        <article className="px-4 py-8 bg-[#132844] text-white md:py-32">
          <div className="mx-auto md:w-5/12">
            <img src={spectrum} alt="spectrum website"></img>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-16">
            <div className="mt-4 flex flex-col items-center text-center md:mt-16">
              <h3 className="font-display text-xl md:text-4xl">Spectrum</h3>
              <p className="mt-4 font-light md:mt-8">
                Coding UI for new feature using <span className="font-bold text-[#F66200]">React</span> and <span className="font-bold text-[#F66200]">SASS</span>
              </p>
            </div>
            <a
              href="https://www.spectrum.com/"
              target="_blank"
              className="border-2 border-[#F66200] rounded w-16 grid place-items-center font-bold text-sm md:w-24 md:h-12 hover:bg-white hover:text-black transition"
            >
              Visit
            </a>
          </div>
        </article>
      </animated.div>
    </section>
  );
}
