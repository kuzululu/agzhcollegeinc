import Banner from "../components/Banner"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

import { Outlet } from "react-router-dom"


const DefaultRootLayout = () =>{
    return(
        <>
        {/* for footer is always at the bottom */}
        <div className="d-flex flex-column min-vh-100">
         <Navbar />
         <main className="flex-fill">
          <Outlet />
         </main>
         <Footer />
        </div>
        </>
    )
}

export default DefaultRootLayout