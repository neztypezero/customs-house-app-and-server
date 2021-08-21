import { Link } from 'react-router-dom';
import mainFloorPlanImg from "../../../assets/img/backgrounds/FloorPlanBaseImage.png";

function FloorPlansMainScreen() {
	return (
		<>
			<img className="full-size" src={mainFloorPlanImg} alt="The Customs House main floorplan." />
			<Link className="customs-house-button urban" to="/floorplans/urban">Urban Collection</Link>
			<Link className="customs-house-button harbour-view" to="/floorplans/harbour-view">Harbour View Collection</Link>
			<Link className="customs-house-button suite-type" to="/floorplans/suite-type">Browse By Suite Type</Link>
		</>
	);
}

export default FloorPlansMainScreen;