import { useTransition, animated } from 'react-spring'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function About() {
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
      navigate('/')
    }, 1000)
  }

  return (
    <section className="h-screen flex justify-center items-center relative">
      {transitions((styles, item) => item &&
        <animated.div style={styles} >
          <span onClick={onClick} className="absolute top-8 left-8 text-white text-4xl cursor-pointer">{'<'}</span>
          <p className="dark:text-white text-center font-light md:text-2xl">
            Hi, I'm an enthusiastic web developer. And my real name is <span className='font-bold'>Thanh Dat.</span> <br />
            <br />
            I'm from South East Asia, and currently living in a beautiful country name Vietnam.<br />
            <br />
            <span className='text-4xl'>🇻🇳</span>
          </p>
        </animated.div>
      )}
    </section>
  );
}
