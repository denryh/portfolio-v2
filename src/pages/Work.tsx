import { useState } from "react";
import { animated, useSpring } from "react-spring";

import { TRANSITION_TIME } from "../util/config";

import Nav from "../components/Nav";

import jennair from "../assets/jennair.png";
import spectrum from "../assets/spectrum.png";

export default function Work() {
  const [show, set] = useState(true);

  const mainStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: { duration: TRANSITION_TIME },
  });

  return (
    <section className="pt-[15vh] min-h-screen dark:text-white">
      <Nav path="/main" toggleFx={set} />
      <animated.div
        style={mainStyles}
        className="h-full flex flex-col items-center"
      >
        <h2 className="mb-20 font-display text-4xl">FEATURED WORKS</h2>
        <div className="max-w-7xl p-4 flex flex-col gap-4 md:grid grid-cols-2 md:gap-8">
          <article className="relative group overflow-hidden rounded">
            <div className="w-full h-full">
              <img
                src={jennair}
                alt="jennair website"
                className="min-h-[200px] group-hover:scale-110 transition-all duration-500 md:h-full"
              ></img>
            </div>
            <div className="p-4 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex flex-col items-center text-center">
                <h3 className="my-4 font-display text-xl md:text-4xl">
                  Jennair
                </h3>
                <p className="font-light">
                  Participating in creating modern and elegant UI using{" "}
                  <span className="font-bold text-[#BD9B60]">React</span> and{" "}
                  <span className="font-bold text-[#BD9B60]">Chakra</span>
                </p>
              </div>
              <a
                href="https://www.jennair.com/"
                target="_blank"
                className="my-4 border-2 border-[#BD9B60] rounded w-16 grid place-items-center font-bold text-sm md:w-24 md:h-12 hover:bg-white hover:text-black transition"
              >
                Visit
              </a>
            </div>
          </article>
          <article className="relative group overflow-hidden rounded">
            <div>
              <img
                src={spectrum}
                alt="spectrum website"
                className="min-h-[200px] group-hover:scale-110 transition-all duration-500"
              ></img>
            </div>
            <div className="p-4 flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex flex-col items-center text-center">
                <h3 className="my-4 font-display text-xl md:text-4xl">
                  Spectrum
                </h3>
                <p className="font-light">
                  Coding UI for new feature using{" "}
                  <span className="font-bold text-[#F66200]">React</span> and{" "}
                  <span className="font-bold text-[#F66200]">SASS</span>
                </p>
              </div>
              <a
                href="https://www.spectrum.com/"
                target="_blank"
                className="my-4 border-2 border-[#F66200] rounded w-16 grid place-items-center font-bold text-sm md:w-24 md:h-12 hover:bg-white hover:text-black transition"
              >
                Visit
              </a>
            </div>
          </article>
        </div>
        <p className="mt-16 text-center text-xl">More is comming soon...</p>
      </animated.div>
    </section>
  );
}
