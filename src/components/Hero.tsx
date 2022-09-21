import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppearanceToggle from './AppearanceToggler'

export default function Hero() {
  const navigate = useNavigate()
  const [show, set] = useState(true)
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: {
      duration: 1000,
    }
  })

  const onClick = () => {
    set(false)
    setTimeout(() => {
      navigate('/about')
    }, 1000)
  }

  return (
    <section onClick={onClick} className="h-screen flex justify-center items-center cursor-pointer dark:text-white">
      <animated.div style={styles}>
        <AppearanceToggle />
        <h1 className="p-8 dark:text-white font-display text-4xl md:text-6xl">
          Henry Dang
        </h1>
      </animated.div>
    </section>
  )
}
