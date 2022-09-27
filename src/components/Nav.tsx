import { useNavigate } from "react-router";
import { useScrollProgress } from "../util/hooks";

import { TRANSITION_TIME } from "../util/config";

import AppearanceToggler from "./AppearanceToggler";

export default function Nav({ path, toggleFx, main }: { path: string, toggleFx: any, main?: boolean }) {
  const navigate = useNavigate()
  const progress = useScrollProgress();
  console.log(progress)

  const back = (e: any) => {
    e.stopPropagation()
    toggleFx(false)
    setTimeout(() => {
      navigate(path)
    }, TRANSITION_TIME)
  }

  return <div className={`fixed -top-10 md:-top-8  w-full flex justify-between z-50 ${main ? "" : "bg-white/80 dark:bg-[#18181C]/80" } `}>
    <div onClick={back} className="cursor-pointer w-20 h-20 rounded-full relative -left-10">
      <span className="absolute top-[46px] left-14 md:left-16 text-2xl md:text-4xl md:top-10">{'<'}</span>
    </div>
    <span className="font-display absolute top-12 left-1/2 -translate-x-1/2">denryh</span>
    <div className="relative -right-10">
      <AppearanceToggler />
    </div>
    <span style={{ width: `${progress}%` }} className="h-1 w-full bg-black absolute top-10 left-0 dark:bg-white md:top-8"></span>
  </div>
}