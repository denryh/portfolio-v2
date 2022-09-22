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

  return <div className="fixed top-0 left-0 right-0 flex justify-between z-50">
    <span onClick={back} className="px-4 py-2 text-4xl cursor-pointer z-20">{'<'}</span>
    <span className="font-display absolute top-4 left-1/2 -translate-x-1/2">denryh</span>
    <div className="relative -top-16 -right-16">
      <AppearanceToggler />
    </div>
  </div>
}