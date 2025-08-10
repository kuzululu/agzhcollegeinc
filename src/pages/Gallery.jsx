import { useRef } from "react"
import { Helmet } from "react-helmet-async"
import MessengerButton from "../shared/components/MessengerButton"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

import e1 from '../assets/images/events/1.jpg'
import e2 from '../assets/images/events/2.jpg'
import e3 from '../assets/images/events/3.jpg'
import e4 from '../assets/images/events/4.jpg'
import e5 from '../assets/images/events/5.jpg'
import e6 from '../assets/images/events/6.jpg'
import e7 from '../assets/images/events/7.jpg'
import e8 from '../assets/images/events/8.jpg'
import e9 from '../assets/images/events/9.jpg'
import e10 from '../assets/images/events/10.jpg'
import e12 from '../assets/images/events/12.jpg'
import e13 from '../assets/images/events/13.jpg'
import e14 from '../assets/images/events/14.jpg'
import e15 from '../assets/images/events/15.jpg'
import e16 from '../assets/images/events/16.jpg'
import e17 from '../assets/images/events/17.jpg'
import e18 from '../assets/images/events/18.jpg'
import e19 from '../assets/images/events/19.jpg'
import e20 from '../assets/images/events/20.jpg'
import e21 from '../assets/images/events/21.jpg'
import e22 from '../assets/images/events/22.jpg'
import e23 from '../assets/images/events/23.jpg'
import e24 from '../assets/images/events/24.jpg'
import e25 from '../assets/images/events/25.jpg'
import e26 from '../assets/images/events/26.jpg'
import e27 from '../assets/images/events/27.jpg'
import e28 from '../assets/images/events/28.jpg'
import e11 from '../assets/images/events/11.jpg'

   
const GalleryPage = () =>{

   const sliderRef = useRef(null)

   const settings = {
    dots: false, //hide the built in dots
    infinite: true,
    speed: 2000, // transition speed (in ms) - 2000ms = 2s
    autoplay: true, //enable automatic sliding
    autoplaySpeed: 3000, // delay between slides (in ms) - 3000ms = 3s
    slidesToShow: 3,
    slidesToScroll: 1,
   //  nextArrow: <NextArrow />,
   //  prevArrow: <PrevArrow />
   arrows: false, // important hide built in arrows
   responsive: [
      {
         breakpoint: 620, // 720px width
         settings:{
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false
         }
      }
   ]
   }

 return(
    <>
     <Helmet>
      <title>Gallery | AZGH COLLEGE INC</title>
     </Helmet>
     <MessengerButton />

     <section id="gallery" className="mt-3">
      <div className="container">

         <div className="row">
            <div className="col-md-12 col-lg-12">
               <h1 className="fw-bolder text-primary">Buwan ng Wika</h1>
            </div>
         </div>

         <div className="row">
            <div className="col-md-12 col-lg-12">
               <p className="text-justify">
                  Buwan ng Wika is an annual celebration in the Philippines held every August to honor and promote the Filipino language and culture. It is a time for students and teachers to showcase their talents through traditional dances, poetry, song performances, and cultural presentations. The event strengthens national pride, fosters unity, and reminds everyone of the importance of preserving our rich linguistic heritage.
               </p>
            </div>
         </div>

         <div className="row">
            <div className="col-1 d-flex justify-content-center align-middle">
               <button type="button" className="side-arrow btn btn-link p-0" aria-label="Previous Slide" onClick={() => sliderRef.current?.slickPrev() }> 
                  <i className="fa-solid fa-circle-chevron-left fs-2"></i>
               </button>
            </div>
            <div className="col-10">

              <div className="slider-hover-area">
               <Slider ref={sliderRef} {...settings}>
                  <div><img src={ e1 } className="w-100 w-100" /></div>
                  <div><img src={ e2 } className="w-100 w-100" /></div>
                  <div><img src={ e3 } className="w-100 w-100" /></div>
                  <div><img src={ e4 } className="w-100 w-100" /></div>
                  <div><img src={ e5 } className="w-100 w-100" /></div>
                  <div><img src={ e6 } className="w-100 w-100" /></div>
                  <div><img src={ e7 } className="w-100 w-100" /></div>
                  <div><img src={ e8 } className="w-100 w-100" /></div>
                  <div><img src={ e9 } className="w-100 w-100" /></div>
                  <div><img src={ e10 } className="w-100 w-100" /></div>
                  <div><img src={ e11 } className="w-100 w-100" /></div>
                  <div><img src={ e12 } className="w-100 w-100" /></div>
                  <div><img src={ e13 } className="w-100 w-100" /></div>
                  <div><img src={ e14 } className="w-100 w-100" /></div>
                  <div><img src={ e15 } className="w-100 w-100" /></div>
                  <div><img src={ e16 } className="w-100 w-100" /></div>
                  <div><img src={ e17 } className="w-100 w-100" /></div>
                  <div><img src={ e18 } className="w-100 w-100" /></div>
                  <div><img src={ e19 } className="w-100 w-100" /></div>
                  <div><img src={ e20 } className="w-100 w-100" /></div>
                  <div><img src={ e21 } className="w-100 w-100" /></div>
                  <div><img src={ e22 } className="w-100 w-100" /></div>
                  <div><img src={ e23 } className="w-100 w-100" /></div>
                  <div><img src={ e24 } className="w-100 w-100" /></div>
                  <div><img src={ e25 } className="w-100 w-100" /></div>
                  <div><img src={ e26 } className="w-100 w-100" /></div>
                  <div><img src={ e27 } className="w-100 w-100" /></div>
                  <div><img src={ e28 } className="w-100 w-100" /></div>
               </Slider>
               </div>
            </div>
            <div className="col-1 d-flex justify-content-center align-middle p-0">
              <button type="button" className="btn btn-link" aria-label="Next Slide" onClick={() => sliderRef.current?.slickNext() }> 
                  <i className="fa-solid fa-circle-chevron-right fs-2"></i>
               </button>
            </div>
         </div>
      </div>
     </section>
    </>
 )
}

export default GalleryPage