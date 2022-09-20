import { useTransition, animated } from 'react-spring'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()
  const [show, set] = useState(true)
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
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
    <section onClick={onClick} className="h-screen flex justify-center items-center text-gray-100 cursor-pointer">
      {transitions((styles, item) => item && 
        <animated.h1 style={styles} className="dark:text-white text-4xl md:text-6xl">
          Henry Dang
        </animated.h1>
      )}
    </section>
  )
}
