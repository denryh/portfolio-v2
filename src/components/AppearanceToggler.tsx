import { useEffect, useState } from 'react'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg'


export default function AppearanceToggle() {
  const [light, setLight] = useState(true)
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setLight(false)
    } else {
      document.documentElement.classList.remove('dark')
      setLight(true)
    }
  })

  const handleToggle = (e: any) => {
    e.stopPropagation()
    if (!light) {
      localStorage.theme = 'light'
      setLight(true)
      return
    }
    localStorage.theme = 'dark'
    setLight(false)
  }

  return <>
  <div
    onClick={handleToggle}
    className='fixed w-32 h-32 rounded-full -top-16 -right-16 bg-black z-50 dark:bg-white'>
    <img
      src={light ? moon : sun} 
      className='w-8 h-8 fixed top-2 right-2'
      style={{ filter: light ? 'invert(93%) sepia(0%) saturate(7465%) hue-rotate(57deg) brightness(107%) contrast(110%)' : ''}} />
  </div>
  </>
}