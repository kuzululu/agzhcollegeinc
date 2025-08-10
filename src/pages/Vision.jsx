import { Helmet } from "react-helmet-async"
import MessengerButton from "../shared/components/MessengerButton"

const VisionPage = () =>{
    return(
        <>
        <MessengerButton />
        <Helmet>
            <title>Vision | AZGH COLLEGE INC</title>
        </Helmet>

        <div className="container" id="vision_content">
	     <div className="row">
		  <div className="col-md-12">
			<h1 className="animate__animated animate__zoomInUp animate__slow text text-center fw-bolder text-warning">VISION</h1>

			<p className="animate__animated animate__zoomIn animate__slow text text-justify">Be a leading provider of highly globally competetive graduates and to help students achieve their goals in life as well-rounded individuals with a sound mind and a sound body and be a functional service in the world.</p>

			<h3 className="animate__animated animate__bounce animate__infinite infinite">Core Values</h3>
			<ul className="animate__animated animate__slideInRight animate__slow">
				<li>Maka-Diyos</li>
				<li>Maka-tao</li>
				<li>Maka-Bayan/Maka-Bansa</li>
				<li>Maka-kalikasan</li>
			</ul>
		</div>
	</div>
</div>

        </>
    )
}

export default VisionPage