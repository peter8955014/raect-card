import Countdown from "@/components/Countdown"
import { Outlet } from "react-router-dom"


const RootLayout = () => {
  return (
    <div className="root-box">
      <Countdown />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout