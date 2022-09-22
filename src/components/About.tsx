import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav'


export default function About() {
  const navigate = useNavigate()
  const [show, set] = useState(true)
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: {
      duration: 1000,
    }
  })
  
  const forward = () => {
    set(false)
    setTimeout(() => {
      navigate('/main')
    }, 1000)
  }

  return (
    <section onClick={forward} className="h-screen flex justify-center items-center relative dark:text-white cursor-pointer">
      <animated.div style={styles}>
        <Nav path='/' toggleFx={set} />
        <div className='px-8'>
          <h2 className='font-display text-4xl md:text-6xl'>About me</h2>
          <p className="mt-8 font-ligh md:text-xl">
            Hi, I'm an enthusiastic web developer, and my real name is <span className='font-bold'>Thanh Dat.</span>
          </p>
          <p className='mt-2 md:text-xl'>I'm currently living in the South East Asia on a beautiful country name Vietnam. 🇻🇳</p>
          <p className='mt-8 text-sm text-zinc-500 md:text-base md:w-3/4 font-light'>*Tiny fact: my major was English Business but after realizing my passion and strength, I decided to teach myself all about web development.</p>
        </div>
      </animated.div>
    </section>
  );
}
