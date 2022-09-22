import { useSpring, animated, config } from "react-spring";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

export default function About() {
  const navigate = useNavigate();
  const [show, set] = useState(true);

  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: {
      duration: 1000,
    },
  });

  const navStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      duration: 1000,
    },
  });

  const forward = () => {
    set(false);
    setTimeout(() => {
      navigate("/main");
    }, 1000);
  };

  return (
    <section className="h-screen relative dark:text-white cursor-pointer">
      <animated.div style={navStyles}>
        <Nav path="/" toggleFx={set} />
      </animated.div>
      <animated.div
        style={styles}
        className="h-full flex flex-col justify-center items-center gap-16"
      >
        <div className="px-8">
          <h2 className="font-display text-4xl md:text-6xl">About me</h2>
          <p className="mt-8 md:text-2xl">
            Hi, I'm an enthusiastic web developer. I can sit on both end of an
            application, and my real name is{" "}
            <span className="font-bold">Dat.</span>
          </p>
          <p className="mt-2 font-light text-sm md:text-xl">
            I'm currently living in the South East Asia on a beautiful country
            name Vietnam. 🇻🇳
          </p>
        </div>
        <i onClick={forward}>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/right--v1.png"
            className="hover:scale-125 transition duration-500 cursor-pointer filter-none dark:filter invert-[93%] sepia-0 saturate-[7465%] hue-rotate-[57deg] brightness-[107%] contrast-[110%]"
          />
        </i>
      </animated.div>
    </section>
  );
}
