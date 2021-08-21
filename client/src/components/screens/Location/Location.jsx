import ImageScreen from "../ImageScreen/ImageScreen";
import locationImg from "../../../assets/img/backgrounds/AmenitiesMap_Base.jpg";

function Location() {
	return (
		<ImageScreen>
			<img className="full-size" src={locationImg} alt="Downtown Victoria area map around the Customs House." />
		</ImageScreen>
	);
}

export default Location;