import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSpring, useTransition, animated } from 'react-spring';
import AppearanceToggle from './AppearanceToggler';

export default function Main() {
  const navigate = useNavigate()
  const [show, set] = useState(true)
  const [items, setItems] = useState<Record<any, any>>([
    {
      content: 'Resume',
    },
    {
      content: 'Experience',
    },
    {
      content: 'Projects',
    },
    {
      content: 'Contact',
    },
  ])

  const mainStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: { duration: 1000 },
  })

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  })

  const back = (e: any) => {
    e.stopPropagation()
    set(!show)
    setTimeout(() => {
      navigate('/about')
    }, 1000)
  }

  return (
    <main className="h-screen dark:text-white">
      <animated.div style={mainStyles} className="relative w-full h-full">
        <AppearanceToggle />
        <span onClick={back} className="p-8 absolute top-2 left-2 text-4xl cursor-pointer z-20">{'<'}</span>
        <div className='grid place-items-center h-full'>
          <ul className='px-8 w-full h-full flex flex-col justify-center items-center text-2xl gap-4 backdrop-blur-md bg-white/80 dark:bg-black/40 z-10 md:dark:bg-transparent md:bg-transparent md:z-10 md:backdrop-blur-none'>
            {transitions(({ opacity }, item) => (
              <animated.li style={{ opacity }} className='w-fit p-4 rounded-md cursor-pointer relative hover:scale-125 transition-all duration-500'>
              {item.content}
              </animated.li>
            ))}
          </ul>
        </div>
        <div className='bg-[url(/src/assets/main.jpg)] bg-center bg-cover fixed top-0 bottom-0 left-0 right-0 z-0 md:w-64 md:h-64 md:top-[10%] md:right-[10%] md:left-auto md:bottom-auto md:rotate-3'></div>
        <div className='bg-[url(/src/assets/sub1.jpg)] bg-center bg-cover fixed md:w-64 md:h-64 md:top-[10%] md:right-auto md:left-[10%] md:bottom-auto -rotate-12'></div>
        <div className='bg-[url(/src/assets/sub2.jpg)] bg-center bg-cover fixed md:w-64 md:h-64 md:top-auto md:right-auto md:left-[10%] md:bottom-[10%] rotate-45'></div>
        <div className='bg-[url(/src/assets/sub3.jpg)] bg-center bg-cover fixed md:w-64 md:h-64 md:top-auto md:right-[10%] md:left-auto md:bottom-[10%] -rotate-[30deg]'></div>
      </animated.div>
    </main>
  )
}