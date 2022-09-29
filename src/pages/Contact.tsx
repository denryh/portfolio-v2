import { useSpring, animated } from "react-spring";
import { useState } from "react";

import { TRANSITION_TIME } from '../util/config'

import Nav from "../components/Nav";

export default function Contact() {
  const [show, set] = useState(true);
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: {
      duration: TRANSITION_TIME
    },
  });

  return (
    <section className="h-screen dark:text-white">
      <Nav path="/main" toggleFx={set} />
      <animated.div
        style={styles}
        className="px-8 w-full h-full flex flex-col justify-between items-center"
      >
        <div className="pt-24 md:pt-0 text-center">
          <h2 className="my-4 text-2xl font-bold md:pt-32">Leave a message</h2>
          <p>Let's get in touch and build some stuff 🤘</p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="font-light text-xl text-neutral-600 dark:text-neutral-300"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-2 border-b-2 focus-visible:outline-none dark:bg-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="font-light text-xl text-neutral-600 dark:text-neutral-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-2 border-b-2 focus-visible:outline-none dark:bg-transparent"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="msg"
              className="font-light text-xl text-neutral-600 dark:text-neutral-300"
            >
              Message
            </label>
            <textarea
              id="msg"
              rows={5}
              className="mt-2 p-2 border-2 focus-visible:outline-none dark:bg-transparent"
            />
          </div>
          <button className="mt-2 w-20 p-2 bg-black text-white dark:bg-white dark:text-black rounded">
            Send
          </button>
        </div>
        <div className="text-center py-4">
          Or call me maybe:{" "}
          <span
            onClick={() => {
              if (!navigator.clipboard)
                alert("Copy functionality not supported.");
              navigator.clipboard.writeText("+84901208303");
              alert("Copied number.");
            }}
            className="font-light underline cursor-pointer"
          >
            +84 901 208 303 (VN)
          </span>
        </div>
      </animated.div>
    </section>
  );
}
