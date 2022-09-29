import { useState } from "react";
import { useNavigate } from "react-router";
import { useSpring, animated, config } from "react-spring";

import { TRANSITION_TIME, RESUME_URL } from "../util/config";

import Nav from "../components/Nav";

import fbIcon from "../assets/icons/facebook.svg";
import insIcon from "../assets/icons/instagram.svg";
import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import mailIcon from "../assets/icons/mail.svg";

export default function Main() {
  const navigate = useNavigate();
  const [show, set] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const mainStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: { duration: TRANSITION_TIME },
  });

  const modalStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: modalOpen ? 1 : 0, y: modalOpen ? 0 : -500 },
    config: config.gentle,
    onRest: () => {},
    onChange: () => {},
  });

  const nav = (path: string) => {
    set(!show);
    setTimeout(() => {
      navigate(path);
    }, TRANSITION_TIME);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <main className="min-h-screen dark:text-white flex flex-col items-center">
      <Nav path="/about" toggleFx={set} main={true} />
      <animated.div
        style={modalStyles}
        className="px-4 w-10/12 relative flex flex-col border-2 border-black rounded-sm bg-white/90 dark:border-white dark:bg-transparent dark:text-white mt-24 z-40 max-w-xl"
      >
        <p className="mt-8 mb-16">
          Navigating to Google Drive for resume view...
        </p>
        <div className="flex gap-2 absolute bottom-4 right-8">
          <button
            onClick={toggleModal}
            className="w-20 h-8 border-2 border-black rounded dark:border-white"
          >
            Cancel
          </button>
          <a
            href={RESUME_URL}
            target="_blank"
            onClick={() => {
              setModalOpen(false);
            }}
            className="w-20 h-8 bg-black text-white border-2 border-black rounded grid place-items-center dark:border-white dark:bg-white dark:text-black"
          >
            OK
          </a>
        </div>
      </animated.div>
      <animated.div style={mainStyles} className="absolute w-full h-full">
        <div className="flex h-full max-w-5xl mx-auto">
          <div className="bg-[url(/src/assets/main.jpg)] bg-center bg-cover fixed top-0 bottom-0 left-0 right-0 z-0 md:static md:flex-1 md:bg-none md:flex md:justify-center md:items-center md:pl-32">
            <div className="bg-[url(/src/assets/main.jpg)] bg-center bg-cover w-[300px] h-[600px] rounded hidden md:block"></div>
          </div>
          <ul className="px-8 w-full h-full flex flex-col justify-center items-center text-2xl gap-8 backdrop-blur-md bg-white/80 dark:bg-black/40 z-10 md:dark:bg-transparent md:bg-transparent md:backdrop-blur-none md:z-0 md:flex-1 md:gap-16 md:items-start">
            <li
              onClick={toggleModal}
              className="w-fit p-4 rounded-md cursor-pointer relative before:h-1 before:w-0 before:bg-black before:absolute before:bottom-2 before:left-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 dark:before:bg-white"
            >
              Resume
            </li>
            <li
              onClick={() => nav("/work")}
              className="w-fit p-4 rounded-md cursor-pointer relative before:h-1 before:w-0 before:bg-black before:absolute before:bottom-2 before:left-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 dark:before:bg-white"
            >
              Work
            </li>
            <li
              onClick={() => nav("/contact")}
              className="w-fit p-4 rounded-md cursor-pointer relative before:h-1 before:w-0 before:bg-black before:absolute before:bottom-2 before:left-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 dark:before:bg-white"
            >
              Contact
            </li>
          </ul>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 before:absolute before:h-[1px] before:w-12 before:bg-black before:-left-16 before:top-1/2 before:-translate-y-1/2 after:absolute after:h-[1px] after:w-12 after:bg-black after:-right-16 after:top-1/2 after:-translate-y-1/2 z-10 md:z-0 dark:before:bg-white dark:after:bg-white md:left-10 md:bottom-1/2 md:translate-y-1/2 md:before:rotate-90 md:before:-top-10 md:before:-left-2 md:after:rotate-90 md:after:top-64 md:after:-left-2">
            <ul className="flex gap-4 md:flex-col">
              <li>
                <a href="https://facebook.com/thdatdg" target="_blank">
                  <img
                    src={fbIcon}
                    alt="facebook"
                    className="hover:scale-125 transition duration-500 cursor-pointer filter-none dark:filter invert-[93%] sepia-0 saturate-[7465%] hue-rotate-[57deg] brightness-[107%] contrast-[110%]"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dgenryh/" target="_blank">
                  <img
                    src={insIcon}
                    alt="instagram"
                    className="hover:scale-125 transition duration-500 cursor-pointer filter-none dark:filter invert-[93%] sepia-0 saturate-[7465%] hue-rotate-[57deg] brightness-[107%] contrast-[110%]"
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/denryh" target="_blank">
                  <img
                    src={githubIcon}
                    alt="github"
                    className="hover:scale-125 transition duration-500 cursor-pointer filter-none dark:filter invert-[93%] sepia-0 saturate-[7465%] hue-rotate-[57deg] brightness-[107%] contrast-[110%]"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/dgthanhdat/"
                  target="_blank"
                >
                  <img
                    src={linkedinIcon}
                    alt="linkedin"
                    className="hover:scale-125 transition duration-500 cursor-pointer filter-none dark:filter invert-[93%] sepia-0 saturate-[7465%] hue-rotate-[57deg] brightness-[107%] contrast-[110%]"
                  />
                </a>
              </li>
              <li>
                <a href="mailto:dtdat101101@gmail.com">
                  <img
                    src={mailIcon}
                    alt="email"
                    className="hover:scale-125 transition duration-500 cursor-pointer filter-none dark:filter invert-[93%] sepia-0 saturate-[7465%] hue-rotate-[57deg] brightness-[107%] contrast-[110%]"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </animated.div>
    </main>
  );
}
