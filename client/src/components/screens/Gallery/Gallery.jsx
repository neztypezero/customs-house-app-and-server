import { Link } from 'react-router-dom';

import './Gallery.css';

function Gallery() {
	return (
		<div id="gallery-screen-container" className="full-screen-container">
			<div id="gallery-screen-inner" className="full-screen-inner">
				<div className="padding">
					<Link className="large-gallery-button building" to="/gallery/building"><label>Building</label></Link>
					<Link className="large-gallery-button suite" to="/gallery/suite"><label>Suite</label></Link>
					<Link className="large-gallery-button history" to="/gallery/history"><label>History</label></Link>
					<Link className="large-gallery-button movie" to="/gallery/movie"><label>Movie</label></Link>
				</div>
			</div>
		</div>
	);
}

export default Gallery;