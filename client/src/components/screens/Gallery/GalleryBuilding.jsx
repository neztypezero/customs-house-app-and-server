import GalleryContainer from "./GalleryContainer";
import { QUERY_GALLERY_BY_NAME } from "../../../db/queries/Queries";

const galleryName = "Building";

function GalleryBuilding() {
	return (
		<GalleryContainer query={QUERY_GALLERY_BY_NAME} variables={{name:galleryName}} />
	);
}

export default GalleryBuilding;