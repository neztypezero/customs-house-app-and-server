import SlideShow from "../SlideShow/SlideShow";

import './Gallery.css';

function GalleryBuilding() {
	return (
		<SlideShow>
			<img src="/img/gallery/building_gallery1.jpg" alt="View of Customs House render from Government and Wharf at night with people walking." />
			<img src="/img/gallery/building_gallery2.jpg" alt="View of Customs House render from harbour looking towards lit up Parliament building at night."  />
			<img src="/img/gallery/building_gallery3.jpg" alt="View of Customs House render from Government and Wharf at day time with people walking and biking."  />
		</SlideShow>
	);
}

export default GalleryBuilding;