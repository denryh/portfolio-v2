import { useSpring, animated } from "react-spring";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppearanceToggle from "./AppearanceToggler";

export default function Hero() {
  const navigate = useNavigate();
  const [show, set] = useState(true);
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: {
      duration: 1000,
    },
  });

  const onClick = () => {
    set(false);
    setTimeout(() => {
      navigate("/about");
    }, 1000);
  };

  return (
    <section className="h-screen flex justify-center items-center cursor-pointer dark:text-white">
      <animated.div style={styles}>
        <div className="fixed -top-10 -right-10">
          <AppearanceToggle />
        </div>
        <div className="flex flex-col justify-center items-center gap-16">
          <h1 className="px-8 dark:text-white font-display text-4xl md:text-6xl">
            Henry Dang
          </h1>
          <div onClick={onClick} className="w-8 h-8 rounded-full bg-black grid place-items-center hover:scale-75 transition dark:bg-white">
            <div className="w-6 h-6 rounded-full bg-white dark:bg-black"></div>
          </div>
        </div>
      </animated.div>
    </section>
  );
}
