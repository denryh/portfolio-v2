import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppearanceToggle from "../components/AppearanceToggler";

import { TRANSITION_TIME } from "../util/config";

import picture from "../assets/sub3.jpg";

export default function Hero() {
  const navigate = useNavigate();
  const [show, set] = useState(true);
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: {
      duration: TRANSITION_TIME,
    },
  });

  const onClick = () => {
    set(false);
    setTimeout(() => {
      navigate("/about");
    }, TRANSITION_TIME);
  };

  return (
    <section className="min-h-screen dark:text-white grid place-items-center">
      <animated.div style={styles}>
        <div className="fixed -top-10 -right-10">
          <AppearanceToggle />
        </div>
        <div className="pt-16 px-8 max-w-5xl md:pt-0">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full flex flex-col gap-8 items-center md:flex-row md:gap-16">
              <div>
                <h1 className=" text-2xl md:text-4xl text-center">Henry Dang</h1>
                <p className="mt-4 font-light text-sm leading-6 md:text-base">
                  I'm an enthusiastic developer that can work on both ends of an
                  software application using my main programming language
                  JavaScript/Nodejs.
                </p>
                <p className="mt-2 font-extralight text-sm text-zinc-500 md:text-base">
                  Current location:{" "}
                  <span className="font-light text-black dark:text-white">
                    South East Asia
                  </span>{" "}
                  on a beautiful country name{" "}
                  <span className="font-normal text-red-600">Vietnam</span>. 🇻🇳
                </p>
              </div>
              <img
                src={picture}
                alt="henry dang"
                className="max-h-[600px] max-w-[300px] rounded-lg"
              />
            </div>
            <div
              onClick={onClick}
              className="mt-4 w-8 h-8 rounded-full bg-black grid place-items-center hover:scale-75 transition dark:bg-white animate-pulse cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-white dark:bg-black"></div>
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
}
