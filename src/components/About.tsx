import { useTransition, animated } from 'react-spring'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppearanceToggle from './AppearanceToggler'


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

  const back = (e: any) => {
    e.stopPropagation()
    set(false)
    setTimeout(() => {
      navigate('/')
    }, 1000)
  }
  
  const forward = () => {
    set(false)
    setTimeout(() => {
      navigate('/main')
    }, 1000)
  }

  return (
    <section onClick={forward} className="h-screen flex justify-center items-center relative dark:text-white">
      {transitions((styles, item) => item &&
        <animated.div style={styles}>
          <AppearanceToggle />
          <span onClick={back} className="p-8 absolute top-2 left-2 text-4xl cursor-pointer">{'<'}</span>
          <div className='px-8'>
            <h2 className='font-display text-4xl md:text-6xl'>About me</h2>
            <p className="mt-8 font-ligh md:text-xl">
              Hi, I'm an enthusiastic web developer, and my real name is <span className='font-bold'>Thanh Dat.</span>
            </p>
            <p className='mt-2 md:text-xl'>I'm currently living in the South East Asia on a beautiful country name Vietnam. 🇻🇳</p>
            <p className='mt-8 text-sm text-zinc-500 md:text-base md:w-3/4 font-light'>*Tiny fact: my major was English Business but after realizing my passion and strength, I decided to teach myself all about web development.</p>
          </div>
        </animated.div>
      )}
    </section>
  );
}
