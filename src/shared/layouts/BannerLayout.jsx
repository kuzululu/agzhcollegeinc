import Banner from "../components/Banner"
import Navbar from "../components/Navbar"

import { Outlet } from "react-router-dom"

const BannerLayout = () =>{
    return(
        <>
         <div className="d-md-none d-lg-none d-block sticky-top">
          <Navbar />
         </div>
         <Banner />
         <div className="d-md-block d-lg-block d-none sticky-top">
         <Navbar />
         </div>
         <Outlet />
        </>
    )
}

export default BannerLayout