import { Helmet } from "react-helmet-async"
import MessengerButton from "../shared/components/MessengerButton"

const MissionPage = () =>{
    return(
        <>
<Helmet>
  <title>School | Home</title>
</Helmet>     
<MessengerButton />
        <div className="container" id="mission_content">
	<div className="row">
		<div className="col-md-12">
			<h1 className="animate__animated animate__zoomInUp animate__slow text text-center fw-bolder text-warning">MISSION</h1>

			<p className="animate__animated animate__zoomIn animate__slow text text-justify">Promote the values of dual training system, self-worthiness among students, faculty and staff, to establish quality standard, performance, and functional transition for students to become productive and responsible citizen of the country.</p>

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

export default MissionPage