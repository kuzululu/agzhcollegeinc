import { useEffect, useRef, useState } from "react"
import header1 from '../../assets/header/header1.jpg'
import header2 from '../../assets/header/header2.jpg'
import header3 from '../../assets/header/header3.jpg'
import header4 from '../../assets/header/header4.jpg'
import header5 from '../../assets/header/header5.jpg'
import header7 from '../../assets/header/header7.jpg'
import header8 from '../../assets/header/header8.jpg'
import header10 from '../../assets/header/header10.jpg'
import header11 from '../../assets/header/header11.jpg'
import header12 from '../../assets/header/header12.jpg'
import header13 from '../../assets/header/header13.jpg'

const Banner = () =>{
return(
    <>
   <section>
    <div className="carousel slide carousel-fade position-relative" data-bs-ride="carousel" id="carousel">

     <div className="carousel-indicators">
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" aria-label="Slide 1" className="active"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="8" aria-label="Slide 9"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="9" aria-label="Slide 10"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="10" aria-label="Slide 11"></button>
    </div>

    <div className="carousel-inner">
      <div className="carousel-item active" data-bs-interval="3000">
        <img src={ header1 } className="img-fluid w-100" />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src={ header2 } className="img-fluid w-100" />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src={ header3 } className="img-fluid w-100" />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src={ header4 } className="img-fluid w-100" />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src={ header5 } className="img-fluid w-100" />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src={ header7 } className="img-fluid w-100" />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src={ header8 } className="img-fluid w-100" />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src={ header10 } className="img-fluid w-100" />
      </div>
      <div className="carousel-item" data-bs-interval="3000">
        <img src={ header11 } className="img-fluid w-100" />
      </div>
    </div>

    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>


    </div>
   </section>
    </>
)
}

export default Banner