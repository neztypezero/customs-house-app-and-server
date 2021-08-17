import './Gallery.css';

import { Link } from 'react-router-dom';

function GalleryMovie(props) {
	return (
		<Link to="/gallery">
			<video id="gallerymovie" width="1920" height="1080" loop="loop" autoPlay="autoPlay" muted="muted">
				<source src="https://neilsondigital1.com/ch_touch/movie/CH_Video_2017.mp4" type="video/mp4" />
			</video>
		</Link>
	);
}

export default GalleryMovie;