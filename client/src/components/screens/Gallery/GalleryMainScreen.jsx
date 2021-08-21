import { Link } from 'react-router-dom';

function GalleryMainScreen() {
	return (
		<>
			<Link className="large-gallery-button building" to="/gallery/building"><label>Building</label></Link>
			<Link className="large-gallery-button suite" to="/gallery/suite"><label>Suite</label></Link>
			<Link className="large-gallery-button history" to="/gallery/history"><label>History</label></Link>
			<Link className="large-gallery-button movie" to="/gallery/movie"><label>Movie</label></Link>
		</>
	);
}

export default GalleryMainScreen;