import ImageScreen from "../ImageScreen/ImageScreen";
import viewImg from "../../../assets/img/backgrounds/CH_view.jpg";

function View() {
	return (
		<ImageScreen>
			<img className="full-size" src={viewImg} alt="Views from the Customs House at morning, dusk, and night." />
		</ImageScreen>
	);
}

export default View;