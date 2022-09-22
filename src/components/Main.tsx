import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSpring, animated, config } from 'react-spring';
import Nav from './Nav';

export default function Main() {
  const navigate = useNavigate()
  const [show, set] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)

  const mainStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: { duration: 1000 },
  })

  const modalStyles = useSpring({
    from: { opacity: 0 },
    to: { opacity: modalOpen ? 1 : 0, y: modalOpen ? 0 : -500 },
    config: config.gentle,
    onRest: () => {
    },
    onChange: () => {

    }
  })

  const nav = (path: string) => {
    set(!show)
    setTimeout(() => {
      navigate(path)
    }, 1000)
  }

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <main className="h-screen dark:text-white flex flex-col items-center">
      <Nav path="/about" toggleFx={set} />
      <animated.div style={modalStyles} className='p-8 relative flex flex-col border-2 border-black rounded bg-white/90 dark:border-white dark:bg-transparent dark:text-white mt-24 z-40'>
        <p className='mt-8 mb-16'>Navigating to Google Drive for resume view...</p>
        <div className='flex gap-2 absolute bottom-4 right-8'>
          <button onClick={toggleModal} className="w-20 h-8 border-2 border-black rounded dark:border-white">Cancel</button>
          <a href='https://drive.google.com/file/d/1n4ML11QCt39zejAehAloz1sT-vKEJ8JF/view' 
            target="_blank"
            onClick={() => {
              setModalOpen(false)
            }}
            className="w-20 h-8 bg-black text-white border-2 border-black rounded grid place-items-center dark:border-white dark:bg-white dark:text-black">
            OK
          </a>
        </div>
      </animated.div>
      <animated.div style={mainStyles} className="absolute w-full h-full">
        <div className='grid place-items-center h-full'>
          <ul className='px-8 w-full h-full flex flex-col justify-center items-center text-2xl gap-4 backdrop-blur-md bg-white/80 dark:bg-black/40 z-10 md:dark:bg-transparent md:bg-transparent md:backdrop-blur-none md:z-0'>
            <li
              onClick={toggleModal} 
              className='w-fit p-4 rounded-md cursor-pointer relative before:h-1 before:w-0 before:bg-black before:absolute before:bottom-2 before:left-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 dark:before:bg-white'>
              Resume
            </li>
            <li 
              onClick={() => nav('/work')}
              className='w-fit p-4 rounded-md cursor-pointer relative before:h-1 before:w-0 before:bg-black before:absolute before:bottom-2 before:left-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 dark:before:bg-white'>
              Work
            </li>
            <li
              onClick={() => nav('/contact')} 
              className='w-fit p-4 rounded-md cursor-pointer relative before:h-1 before:w-0 before:bg-black before:absolute before:bottom-2 before:left-1/2 before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 dark:before:bg-white'>
              Contact
            </li>
          </ul>
        </div>
        <div className='bg-[url(/src/assets/main.jpg)] bg-center bg-cover fixed top-0 bottom-0 left-0 right-0 z-0 md:w-[10vw] md:h-[20vh] md:top-[15%] md:right-[15%] md:left-auto md:bottom-auto md:rotate-3 hover:scale-125 transition duration-500 hover:-rotate-3'></div>
        <div className='bg-[url(/src/assets/sub1.jpg)] bg-center bg-cover fixed md:w-[10vw] md:h-[20vh] md:top-[15%] md:right-auto md:left-[15%] md:bottom-auto -rotate-12 hover:scale-125 transition duration-500 hover:rotate-3'></div>
        <div className='bg-[url(/src/assets/sub2.jpg)] bg-center bg-cover fixed md:w-[10vw] md:h-[20vh] md:top-auto md:right-auto md:left-[15%] md:bottom-[15%] rotate-45 hover:scale-125 transition duration-500 hover:-rotate-3'></div>
        <div className='bg-[url(/src/assets/sub3.jpg)] bg-center bg-cover fixed md:w-[10vw] md:h-[20vh] md:top-auto md:right-[15%] md:left-auto md:bottom-[15%] -rotate-[30deg] hover:scale-125 transition duration-500 hover:rotate-3'></div>
      </animated.div>
    </main>
  )
}