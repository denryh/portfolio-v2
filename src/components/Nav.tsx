import AppearanceToggler from "./AppearanceToggler";
import { useNavigate } from "react-router";

export default function Nav({ path, toggleFx }: { path: string, toggleFx: any }) {
  const navigate = useNavigate()

  const back = (e: any) => {
    e.stopPropagation()
    toggleFx(false)
    setTimeout(() => {
      navigate(path)
    }, 1000)
  }

  return <div className="fixed top-0 w-full flex justify-between z-50 overflow-hidden">
    <div onClick={back} className="bg-black cursor-pointer w-20 h-20 rounded-full text-white relative -top-10 -left-10 dark:text-black dark:bg-white">
      <span className="absolute top-10 left-12 text-2xl">{'<'}</span>
    </div>
    <span className="font-display absolute top-2 left-1/2 -translate-x-1/2">denryh</span>
    <div className="relative -top-10 -right-10">
      <AppearanceToggler />
    </div>
  </div>
}