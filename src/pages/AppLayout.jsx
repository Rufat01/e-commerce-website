import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"


const AppLayout = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-0">
        <Header />

         <div>
             <Outlet />
         </div>

        <Footer />
    </div>
  )
}

export default AppLayout
