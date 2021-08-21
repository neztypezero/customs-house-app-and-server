import { Link } from 'react-router-dom';

function GalleryMovie(props) {
	return (
		<Link className="movie-link" to="/gallery">
			<video id="gallerymovie" width="1920" height="1080" loop="loop" autoPlay="autoPlay" muted="muted">
				<source src="/movie/CH_Video_2020.mp4" type="video/mp4" />
			</video>
		</Link>
	);
}

export default GalleryMovie;