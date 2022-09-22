import { useState } from "react";
import { animated, useSpring } from "react-spring";
import Nav from "./Nav";

export default function Work() {
  const [show, set] = useState(true)

  const mainStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: { duration: 1000 },
  })

  return (
    <section className="w-screen h-screen">
      <Nav path="/main" toggleFx={set} />
      <animated.div style={mainStyles} className="h-full grid place-items-center">
        <span className="text-2xl font-light">Coming up...</span>
      </animated.div>
    </section>
  )
}
