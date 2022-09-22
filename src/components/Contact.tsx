import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import Nav from './Nav'

export default function Contact() {
  const [show, set] = useState(true)
  const styles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: {
      duration: 750,
    }
  })

  return (
    <section className="h-screen dark:text-white">
      <Nav path='/main' toggleFx={set} />
      <animated.div style={styles} className="w-full h-full p-8 flex flex-col gap-16 justify-center items-center">
        <h2 className='text-2xl font-bold'>Let's get in touch</h2>
        <div className='flex flex-col gap-4 w-full md:w-1/3'>
          <div className='flex flex-col'>
            <label htmlFor='name' className='font-light text-xl text-neutral-600 dark:text-neutral-300'>Name</label>
            <input id="name" type="text" className='mt-2 border-b-2 focus-visible:outline-none dark:bg-transparent'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='email' className='font-light text-xl text-neutral-600 dark:text-neutral-300'>Email</label>
            <input id="email" type="email" className='mt-2 border-b-2 focus-visible:outline-none dark:bg-transparent'/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='msg' className='font-light text-xl text-neutral-600 dark:text-neutral-300'>Message</label>
            <textarea id="msg" rows={5} className='mt-2 p-2 border-2 focus-visible:outline-none dark:bg-transparent'/>
          </div>
          <button className='mt-2 w-20 p-2 bg-black text-white dark:bg-white dark:text-black rounded'>Send</button>
        </div>
      </animated.div>
    </section>
  )
}
