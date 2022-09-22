import AppearanceToggler from "./AppearanceToggler";
import { useNavigate } from "react-router";
import useScrollProgress from "../hooks/useScrollProgress";

export default function Nav({ path, toggleFx }: { path: string, toggleFx: any }) {
  const navigate = useNavigate()
  const progress = useScrollProgress();
  console.log(progress)

  const back = (e: any) => {
    e.stopPropagation()
    toggleFx(false)
    setTimeout(() => {
      navigate(path)
    }, 1000)
  }

  return <div className="fixed -top-10 w-full flex justify-between z-50 bg-white/80 dark:bg-[#18181C]/80">
    <div onClick={back} className="bg-black cursor-pointer w-20 h-20 rounded-full text-white relative -left-10 dark:text-black dark:bg-white">
      <span className="absolute top-10 left-12 text-2xl">{'<'}</span>
    </div>
    <span className="font-display absolute top-12 left-1/2 -translate-x-1/2">denryh</span>
    <div className="relative -right-10">
      <AppearanceToggler />
    </div>
    <span style={{ width: `${progress}%` }} className="h-1 w-full bg-black absolute top-10 left-0 dark:bg-white"></span>
  </div>
}