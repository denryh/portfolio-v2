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
        className="h-full flex flex-col justify-center items-center md:gap-16"
      >
        <div className="pt-10 md:pt-20 px-8">
          <h2 className="my-8 font-display text-2xl md:text-4xl">About</h2>
          <p className="my-4 font-light md:text-xl">
            Hi 👋 I'm an enthusiastic web developer/engineer. I can sit on both ends of
            an application, and my Vietnamese name is{" "}
            <span className="font-bold">Dat.</span>
          </p>
          <p className="my-2 pl-4 font-light">
            Here's a quick summary of my skill set:
          </p>
          <ul className="pl-4 flex flex-col gap-4 font-extralight text-gray-600 dark:text-gray-400 bg-black/5 dark:bg-black/40 p-8 rounded text-justify transition-all duration-500 hover:scale-105 hover:bg-black/20 dark:hover:bg-black">
            <li className="md:text-xl">
              On <span className="font-bold text-black dark:text-white">front-end</span>: I'm using
              mainly <span className="font-bold text-sky-400">React</span> with
              other tools such as
              <span className="italic font-sm text-black dark:text-white">
                {" "}
                Redux, react-spring, Tailwindcss, Sass,...
              </span>
            </li>
            <li className="md:text-xl">
              On <span className="font-bold text-black dark:text-white">back-end</span>: I can quickly
              spin up a simple REST API using{" "}
              <span className="font-bold text-green-600">Nodejs</span> with
              <span className="italic font-sm text-black dark:text-white">
                {" "}
                Express, JWT auth, ORMs...
              </span>
            </li>
            <li className="pl-4 md:text-xl">
              👉 I can implement <span className="text-pink-500 font-bold">GraphQL</span> API using <span className="text-indigo-700 font-bold">Apollo</span> framework and do a
              bit of unit testing with <span className="text-amber-800 font-bold">Jest</span> and E2E tests with <span className="text-teal-900 font-bold">Cypress</span>
            </li>
            <li className="md:text-xl">
              With <span className="font-bold text-black dark:text-white">databases</span>: I could work
              with either relational or document database like
              <span className="font-normal text-black dark:text-white">
                {" "}
                SQL, MongoDB
              </span>
            </li>
            <li className="md:text-xl">Other stuff including:
              <ul className="my-4 pl-8 flex flex-col gap-2 text-base">
                <li>
                  👉 <span className="text-black dark:text-white font-normal">Figma, Adobe XD</span> for design comps
                </li>
                <li>
                  👉 Task hanlding using <span className="text-black dark:text-white font-normal">Jira</span>, writing docs with <span className="text-black dark:text-white font-normal">Confluence</span>, versioning using <span className="text-black dark:text-white font-normal">GitHub</span> for CI/CD
                </li>
                <li>
                  👉 Working with <span className="text-black dark:text-white font-normal">Wordpress (PHP), Adobe Experience Manager (Java)</span>
                </li>
              </ul>
            </li>
          </ul>
          <p className="my-8 font-thin text-sm md:text-base">
            I'm currently living in the South East Asia on a beautiful country
            name Vietnam. 🇻🇳
          </p>
        </div>
        <i onClick={forward}>
          <img
            src={arrow}
            className="w-12 h-12 hover:scale-125 transition duration-500 cursor-pointer filter-none dark:filter invert-[93%] sepia-0 saturate-[7465%] hue-rotate-[57deg] brightness-[107%] contrast-[110%]"
          />
        </i>
      </animated.div>
    </section>
  );
}
