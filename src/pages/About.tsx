import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TRANSITION_TIME } from "../util/config";

import Nav from "../components/Nav";

import arrow from "../assets/icons/arrow.svg";

export default function About() {
  const navigate = useNavigate();
  const [show, set] = useState(true);

  const springObj = {
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: {
      duration: TRANSITION_TIME,
    },
  };

  const styles = useSpring(springObj);

  const navStyles = useSpring(springObj);

  const forward = () => {
    set(false);
    setTimeout(() => {
      navigate("/main");
    }, TRANSITION_TIME);
  };

  return (
    <section className="min-h-screen relative dark:text-white">
      <animated.div style={navStyles}>
        <Nav path="/" toggleFx={set} />
      </animated.div>
      <animated.div
        style={styles}
        className="min-h-screen mx-auto px-8 max-w-5xl flex items-center justify-center"
      >
        <div className="pt-24 flex flex-col gap-8 items-center md:pt-0">
          <h2 className="text-3xl">Abilities summary</h2>
          <ul className="rounded p-8 flex flex-col gap-4 font-extralight text-zinc-600 bg-black/5 dark:text-zinc-400 dark:bg-black/40 text-justify">
            <li className="md:text-lg">
              On{" "}
              <span className="font-normal text-black dark:text-white">
                front-end
              </span>
              :<span className="font-normal text-sky-400"> React </span>is primary
              followed by
              <span className="font-light text-black dark:text-gray-200">
                {" "}
                Redux, react-spring, Tailwindcss, Sass,...
              </span>
            </li>
            <li className="md:text-lg">
              On{" "}
              <span className="font-normal text-black dark:text-white">
                back-end
              </span>
              :<span className="font-normal text-green-600"> Nodejs</span> with
              <span className="font-light text-black dark:text-gray-200">
                {" "}
                Express, REST APIs, JWT auth, ORMs...
              </span>{" "}
              or implementing{" "}
              <span className="text-pink-500 font-normal">GraphQL</span> APIs using{" "}
              <span className="text-indigo-700 font-normal">Apollo</span> framework,
              unit testing with{" "}
              <span className="text-amber-800 font-normal">Jest</span> and E2E tests
              with <span className="text-teal-500 font-normal">Cypress</span>
            </li>
            <li className="md:text-lg">
              With{" "}
              <span className="font-normal text-black dark:text-white">
                databases
              </span>
              : Relational and document such as
              <span className="text-black dark:text-gray-200 font-light"> SQL, MongoDB</span>
            </li>
            <li className="md:text-lg">
              <span className="font-normal text-black dark:text-white">Extras</span>
              :
              <ul className="pl-4 my-4 flex flex-col gap-2 text-base list-disc">
                <li>
                  Design tools:{" "}
                  <span className="text-black dark:text-gray-200 font-light">
                    Figma, Adobe XD
                  </span>
                </li>
                <li>
                  Versioning:{" "}
                  <span className="text-black dark:text-gray-200 font-light">
                    Bitbucket, GitHub
                  </span>{" "}
                </li>
                <li>
                  Content management systems:{" "}
                  <span className="text-black dark:text-gray-200 font-light">
                    Wordpress, Adobe Experience Manager
                  </span>
                </li>
                <li>
                  Language syntax:{" "}
                  <span className="text-black dark:text-gray-200 font-light">
                    Python, Java
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          <i onClick={forward}>
            <img
              src={arrow}
              className="my-4 w-12 h-12 cursor-pointer transition-all duration-250 hover:filter hover:dark:filter-none filter-none dark:filter invert-[93%] sepia-0 saturate-[7465%] hue-rotate-[57deg] brightness-[107%] contrast-[110%]"
            />
          </i>
        </div>
      </animated.div>
    </section>
  );
}
