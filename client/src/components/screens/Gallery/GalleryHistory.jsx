import GalleryContainer from "./GalleryContainer";
import { QUERY_GALLERY_BY_NAME } from "../../../db/queries/Queries";

const galleryName = "History";

function GalleryHistory() {
	return (
		<GalleryContainer query={QUERY_GALLERY_BY_NAME} variables={{name:galleryName}} />
	);
}

export default GalleryHistory;