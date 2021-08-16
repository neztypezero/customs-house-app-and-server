import './Gallery.css';

function GalleryMovie() {
	return (
		<video id="gallerymovie" width="1920" height="1080" loop="loop" autoplay="autoplay" muted="muted">
			<source src="/img/movie/CH_Video_2020.mp4" type="video/mp4" />
		</video>
	);
}

export default GalleryMovie;