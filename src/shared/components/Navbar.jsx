import { NavLink, useLocation } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import Logo from '../../assets/logos/azgh_logo.png'

import { Collapse } from "bootstrap/js/dist/collapse"

const Navbar = () =>{
    const location = useLocation()

    useEffect(()=>{
         const navbarCollapseEl = document.querySelector("#navbarNav")
          if(navbarCollapseEl && navbarCollapseEl.classList.contains("show")){
            const bsCollapse = Collapse.getInstance(navbarCollapseEl) || new Collapse(navbarCollapseEl, { toggle: false });
            bsCollapse.hide();
         }
    }, [location])
    
    return(
        <>
      <nav className="navbar navbar-expand-lg bg-dark bg-gradient sticky-top" id="navbar">
        
       <div className="container-fluid">
        <NavLink to="/" className="navbar-brand fw-bolder animate__animated animate__fadeIn">
          <img src={ Logo } className="img-fluid position-absolute d-lg-block d-md-block d-none" id="logoNavbar" />
        </NavLink>

        <button className='navbar-toggler bg-light' type='button' data-bs-toggle='collapse' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'  data-bs-target='#navbarNav'><span className='navbar-toggler-icon'></span></button>

        <div className="collapse justify-content-end navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">

             <li className="nav-item ps-lg-4 pe-lg-4 ps-md-4 pe-md-4">
                <NavLink to="/" className="nav-link text-light fw-bolder">Home</NavLink>
             </li>

             <li className="dropdown ps-lg-4 pe-lg-4 ps-md-4 pe-md-4 nav-item">
                <a className="nav-link text-light fw-bolder dropdown-toggle" type="button" role="button" data-bs-toggle="dropdown" href="#">About</a>
             <ul className="dropdown-menu">
                <li>
                    <NavLink to="/mission" className="dropdown-item">Mission</NavLink>
                </li>
                <li>
                    <NavLink to="/vision" className="dropdown-item">Vision</NavLink>
                </li>
             </ul>

             </li>

             <li className="nav-item ps-lg-4 pe-lg-4 ps-md-4 pe-md-4">
                <NavLink to="/gallery" className="nav-link text-light fw-bolder">Gallery</NavLink>
             </li>

             <li className="nav-item ps-lg-4 pe-lg-4 ps-md-4 pe-md-4">
                <NavLink to="/contact" className="nav-link text-light fw-bolder">Contact Us</NavLink>
             </li>

            </ul>

        </div>

       </div>

      </nav>
        </>
    )
}

export default Navbar